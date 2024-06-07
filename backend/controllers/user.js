import { User } from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({
  path: '../.env',
});

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: 'Invalid Data',
        success: false,
      });
    }
    if (password.length < 8) {
      return res.status(404).json({
        message: 'Password length must be greater than 8 characters.',
        success: false,
      });
    }

    const user = await User.findOne({ email });

    // If user exists in db
    if (user) {
      return res.status(401).json({
        message: 'User already exists',
        success: false,
      });
    }

    // Password hashing
    const hashedPassword = await bcryptjs.hash(password, 16);

    // New User
    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: 'Account created successfully.',
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: 'Invalid Data',
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials.',
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid credentials.',
        user,
        success: false,
      });
    }

    // If credentials match. Generate Token
    const tokenData = {
      id: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
      })
      .json({
        message: `Welcome back ${user.fullName}.`,
        token: token,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  return res
    .status(200)
    .cookie('token', '', {
      expiresIn: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      message: 'Logout Successfull.',
      success: true,
    });
};
