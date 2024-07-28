import { MongoClient } from 'mongodb';

const uri = 'your-mongodb-connection-string';
const client = new MongoClient(uri);

export async function connectDB() {
  if (!client.isConnected()) await client.connect();
  return client.db('real-estate-token');
}
