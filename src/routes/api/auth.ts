import { MongoClient } from 'mongodb';
const uri = 'your-mongodb-connection-string';
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.isConnected()) await client.connect();
  return client.db('real-estate-token');
}

interface AuthRequest {
  email: string;
  password: string;
}

export async function post({ request, params }: { request: Request; params: { action: string } }) {
  const { email, password }: AuthRequest = await request.json();
  const db = await connectDB();
  const users = db.collection('users');

  if (params.action === 'register') {
    const existingUser = await users.findOne({ email });
    if (existingUser) return { status: 400, body: { success: false, message: 'User already exists' } };

    await users.insertOne({ email, password });
    return { status: 200, body: { success: true, message: 'User registered successfully' } };
  } else if (params.action === 'login') {
    const user = await users.findOne({ email, password });
    if (user) {
      // Generate a token or session here
      return { status: 200, body: { success: true, message: 'Login successful' } };
    }
    return { status: 400, body: { success: false, message: 'Invalid credentials' } };
  }
}
