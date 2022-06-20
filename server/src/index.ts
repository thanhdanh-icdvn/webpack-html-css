
/**
 * Required external modules
 */
import * as dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from "path";
import morgan from "morgan";
import { appRoutes } from "./routes";
import { mongoConnector } from "./utils/db.connector";

// Load config form .env file
dotenv.config({
  path : (path.resolve(__dirname,'../.env.local'))
})

/**
 * App variables
 */
if(!process.env.PORT){
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string,10);
const app = express();
/**
 * App configuation
 */
// use helmet to protect server
app.use(helmet());
// use cors to forward api to client
app.use(cors());
// use body as json for post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
mongoConnector(process.env.MONGO_URL_PREFIX, process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD, process.env.MONGO_URL_POSTFIX);
// Config router
app.use("/api/v1",appRoutes);
/**
 * Server activation
 */
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})