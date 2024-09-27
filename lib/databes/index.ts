import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cashed = (global as any).mongoose  || { conn: null, promise: null}

export const connectToDatabase = async () => {
    if (cashed.conn) return cashed.conn;

    if (!MONGODB_URI) throw new Error('MONGO URI does not exist')

    cashed.promise = cashed.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'eventable',
        bufferCommands: false,
    });

    cashed.conn = await cashed.promise;

    return cashed.conn;
}



// This kind of code is typically used in 
// server-side applications to connect to a MongoDB database. 
// It is especially useful in serverless environments (e.g., Vercel, AWS Lambda) 
// where reusing a connection is essential for performance optimization 
// and to avoid multiple connections during execution of multiple requests.