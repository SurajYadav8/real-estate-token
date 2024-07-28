import { MongoClient } from 'mongodb';
const uri = 'your-mongodb-connection-string';
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.isConnected()) await client.connect();
  return client.db('real-estate-token');
}

interface TokenRequest {
  tokenName: string;
  tokenSymbol: string;
  totalSupply: number;
}

export async function post({ request }: { request: Request }) {
  const { tokenName, tokenSymbol, totalSupply }: TokenRequest = await request.json();
  const db = await connectDB();
  const tokens = db.collection('tokens');

  const result = await tokens.insertOne({ tokenName, tokenSymbol, totalSupply });
  if (result.insertedId) {
    return { status: 200, body: { success: true, message: 'Token created successfully' } };
  }
  return { status: 400, body: { success: false, message: 'Token creation failed' } };
}

export async function get() {
  const db = await connectDB();
  const tokens = db.collection('tokens');
  const allTokens = await tokens.find().toArray();
  return { status: 200, body: allTokens };
}
