import { Router } from "express";
import mailRouter from "../mailer";
import teamRouter from "../teams/teams.routes";
import usersRouter from "../users/users.routes";

export const appRoutes = Router();
appRoutes.use("/teams",teamRouter);
appRoutes.use("/users",usersRouter);
appRoutes.use("/send-mail",mailRouter);