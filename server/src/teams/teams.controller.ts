import { IAddTeamReq, ITeam,IGetTeamReq } from './teams.model';
import { RequestHandler, Response } from 'express';

const TEAMS: ITeam[] = [
  { id: 1, name: 'Real Madrid', league: 'La Liga', isActive: true },
  { id: 2, name: 'Barcelona', league: 'La Liga', isActive: true },
  { id: 3, name: 'Manchester United', league: 'Premier League', isActive: true },
  { id: 4, name: 'Liverpool', league: 'Premier League', isActive: true },
  { id: 5, name: 'Arsenal', league: 'Premier League', isActive: true },
  { id: 6, name: 'Inter', league: 'Serie A', isActive: true },
  { id: 7, name: 'Milan', league: 'Serie A', isActive: true },
  { id: 8, name: 'Juventus', league: 'Serie A', isActive: true }
]

/**
 * Get team records
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getTeams:RequestHandler = (req: Request, res: Response) => {
  res.json(TEAMS);
};
/**
 * Get team record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getTeamById: RequestHandler = (req: IGetTeamReq, res: Response) =>{
  const team = TEAMS.find((team) => team.id === +req.params.id && team.isActive);
  if(team){
    res.status(200).json(team);
  }else{
    res.status(404).json({
      code:404,
      message:"Team not found or deactivated"
    })
  }
};

/**
 * Inserts a new team record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addTeam: RequestHandler = (req: IAddTeamReq, res: Response) => {
  const lastTeamIndex = TEAMS.length - 1;
  const lastId = TEAMS[lastTeamIndex].id;
  const id = lastId + 1;
  const newTeam: ITeam = {
    ...req.body,
    id,
    isActive: true
  };

  TEAMS.push(newTeam);

  res.json(newTeam);
};

/**
 * Updates existing team record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateTeamById: RequestHandler = (req: IUpdateTeamReq, res: Response) => {
  let currentTeam = TEAMS.find((team) => team.id === +req.params.id && team.isActive);
  let teamUpdated = currentTeam;
  const {name,league} = req.body;

  if(currentTeam){
    teamUpdated = {...currentTeam,name,league};
    return res.status(201).json(teamUpdated);
  }else{
    return res.status(404).json({
      code:404,
      message:"Team not found or deactivated"
    });
  }
};

/**
 * deletes a team
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteTeamById: RequestHandler = (req: IDeleteTeamReq, res: Response) => {
  const teamIndex = TEAMS.findIndex((team) => team.id === +req.params.id && team.isActive);
  if(teamIndex>=0){
    TEAMS.splice(teamIndex, 1);
    res.json({ success: true });
  }else{
    res.status(404).json({
      code:404,
      message:"Team not found"
    })
  }
};
