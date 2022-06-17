import { Router } from "express";
import { addTeam, deleteTeamById, getTeamById, getTeams, updateTeamById } from "./teams.controller";

const teamRouter = Router();
teamRouter
  .route("/")
  .get(getTeams);

teamRouter
  .route('/:id')
  .get(
    getTeamById
  );

teamRouter
  .route('/')
  .post(
    addTeam
  );

teamRouter
  .route('/:id')
  .patch(
    updateTeamById
  );

teamRouter
  .route('/:id')
  .delete(
    deleteTeamById
  );

export default teamRouter;