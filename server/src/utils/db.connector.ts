import mongoose from 'mongoose';
import { Logger } from 'tslog';

const log: Logger = new Logger();
/**
 * A mongo connector to connect to mongo atlas
 * @param prefix Mongo prefix
 * @param username Mongo username
 * @param password Mongo password
 * @param postfix Mongo postfix
 * @param options Mongo options
 */
export async function mongoConnector(
  prefix: string | undefined,
  username: string | undefined,
  password: string | undefined,
  postfix: string | undefined,
  options?: string | undefined,
): Promise<void> {
  try {
    const connectionString = `${prefix}${username}:${password}@${postfix}?${options}`;
    log.debug(connectionString);
    const isConnected = await mongoose.connect(connectionString);
    if (isConnected) {
      log.debug('Connected to db successful');
    }
  } catch (error) {
    log.error('Could not connect to mongo server ', error);
    process.exit(1);
  }
}
