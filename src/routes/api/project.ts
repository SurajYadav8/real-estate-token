import { MongoClient } from 'mongodb';
const uri = 'your-mongodb-connection-string';
const client = new MongoClient(uri);

async function connectDB() {
  if (!client.isConnected()) await client.connect();
  return client.db('real-estate-token');
}

interface ProjectRequest {
  projectName: string;
  description: string;
  location: string;
}

export async function post({ request }: { request: Request }) {
  const { projectName, description, location }: ProjectRequest = await request.json();
  const db = await connectDB();
  const projects = db.collection('projects');

  const result = await projects.insertOne({ projectName, description, location });
  if (result.insertedId) {
    return { status: 200, body: { success: true, message: 'Project created successfully' } };
  }
  return { status: 400, body: { success: false, message: 'Project creation failed' } };
}
