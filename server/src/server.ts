import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { appRoutes } from './routes';
import { mongoConnector } from './utils/db.connector';
import { Logger } from 'tslog';
import { errorMiddleware404, errorMiddlewareServer } from './middlewares/error.middleware';
import cookieParser from 'cookie-parser';
import { apiLimitter } from './middlewares/rate-limit.middleware';
import { MONGO_OPTIONS, MONGO_PASSWORD, MONGO_URL_POSTFIX, MONGO_URL_PREFIX, MONGO_USERNAME } from './config';
import passport from 'passport';
import { googlePassportMiddleware, facebookPassportMiddleware } from './middlewares/auth.middleware';
import sessions from 'express-session';
export const log: Logger = new Logger();


/**
 * App variables
 */
if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

/**
 * Express instance
 */
const app = express();

/**
 * App configuation
 */

// Use cookie parser middleware
app.use(cookieParser());
// use helmet to protect server
app.use(helmet());
// use cors to forward api to client
app.use(cors());
// use body as json for post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false
}));
googlePassportMiddleware();
facebookPassportMiddleware();
app.use(passport.initialize());
app.use(passport.session());

/**
 * Connect to db
 */
mongoConnector(
  MONGO_URL_PREFIX as string,
  MONGO_USERNAME as string,
  MONGO_PASSWORD as string,
  MONGO_URL_POSTFIX as string,
  MONGO_OPTIONS as string
);

/**
 * App router prefix
 */
app.use('/api/v1',apiLimitter, appRoutes);
/**
 * Catch base error
 */
app.use(errorMiddleware404);
app.use(errorMiddlewareServer);


/**
 * Server activation
 */
app.listen(PORT, () => {
  log.debug(`Server is running on port ${PORT}`);
});