import mongoose from 'mongoose';

export async function mongoConnector(prefix: string | undefined, username: string | undefined, password: string | undefined, postfix: string | undefined) {
  try {
    const isConnected =  await mongoose.connect(`${prefix}${username}:${password}@${postfix}`);
    if(isConnected){
      console.info("Connected to db successful");
    }
  } catch (error) {
    console.error("Could not connect to mongo server ", error);
  }
}
