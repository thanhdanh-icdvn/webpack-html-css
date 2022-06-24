import rateLimit from 'express-rate-limit';

/**
 * Api limitter middleware
 */
export const apiLimitter  =rateLimit({
  // 15 minutes
  windowMs:15*60*1000,
  // Limit each IP to n request per windowMs
  max:500,
  // Return rate limit info in the `RateLimit-*` headers
  standardHeaders:true,
  // Disable the `X-RateLimit-*` headers
  legacyHeaders:false
});