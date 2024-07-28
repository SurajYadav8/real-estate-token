import type { RequestHandler } from '@sveltejs/kit';
import { connectDB } from '$lib/db';
import type { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

interface User {
  _id?: ObjectId;
  email: string;
  password: string;
}

const JWT_SECRET = 'your-secret-key';

export const post: RequestHandler = async ({ request, params }) => {
  const { email, password }: AuthRequest = await request.json();
  const db = await connectDB();
  const users = db.collection<User>('users');

  if (params.action === 'register') {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return {
        status: 400,
        body: { success: false, message: 'User already exists' }
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await users.insertOne({ email, password: hashedPassword });

    return {
      status: 200,
      body: { success: true, message: 'User registered successfully' }
    };
  } else if (params.action === 'login') {
    const user = await users.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      return {
        status: 200,
        body: { success: true, token, message: 'Login successful' }
      };
    }

    return {
      status: 400,
      body: { success: false, message: 'Invalid credentials' }
    };
  }

  return {
    status: 400,
    body: { success: false, message: 'Invalid action' }
  };
};
