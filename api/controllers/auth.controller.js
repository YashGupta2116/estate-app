import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  // register controller

  try {
    const {username, email, password} = req.body;

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({message: 'User created Successfully', newUser});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Failed to create user!'});
  }
};

export const login = async (req, res) => {
  // login controller
  const {username, password} = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {username},
    });

    if (!user) return res.status(401).json({message: 'Invalid credentials'});

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({message: 'Invalid credentials'});

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      {expiresIn: age}
    );

    res
      .cookie('token', token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json({message: 'user login successfull', user});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: 'Failed to login user!'});
  }
};
export const logout = (req, res) => {
  // logout controller
  res
    .clearCookie('token')
    .status(200)
    .json({message: 'User logged out successfully!'});
};
