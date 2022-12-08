import { Department } from "./department";
import { PoliticIntegration } from "./politic-integration";
import { Position } from "./position";
import { Scholarship } from "./scholarship";

export class Worker {
  id!:Number;
  ci!:string;
  firstName?:String;
  secondName?:String;
  lastName?:String;
  race?:String;
  sex?:String;
  expedientNumber?:Number;
  active?:String;
  contractType?:String;
  defensePlace?:String;
  politiclist?:PoliticIntegration[];
  scholarShiplist?:Scholarship[];
  position?:Position
  department?:Department;
}
