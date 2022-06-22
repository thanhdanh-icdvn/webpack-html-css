import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import morgan from 'morgan';
import { appRoutes } from './routes';
import { mongoConnector } from './utils/db.connector';
import { Logger } from 'tslog';

const log:Logger = new Logger();
// Load config form .env file
dotenv.config({
  path: (path.resolve(__dirname, '../.env.local'))
});

/**
 * App variables
 */
if (!process.env.PORT) {
  process.exit(1);
}


const PORT: number = parseInt(process.env.PORT as string, 10);
const {
  MONGO_URL_PREFIX,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URL_POSTFIX,
  MONGO_OPTIONS
} = process.env;


/**
 * Express instance
 */
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
app.use(morgan('tiny'));
app.use(express.static('public'));
// Connect to db
mongoConnector(
  MONGO_URL_PREFIX,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URL_POSTFIX,
  MONGO_OPTIONS
);

/**
 * App router prefix
 */
app.use('/api/v1', appRoutes);
/**
 * Server activation
 */
app.listen(PORT, () => {
  log.debug(`Server is running on port ${PORT}`);
});