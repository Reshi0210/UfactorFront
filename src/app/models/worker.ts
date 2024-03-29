import { Adress } from "./adress";
import { CareerPlan } from "./career-plan";
import { Department } from "./department";
import { Entidad } from "./entidad";
import { PoliticIntegration } from "./politic-integration";
import { Position } from "./position";
import { Scholarship } from "./scholarship";

export class Worker {
  id!:Number;
  ci!:string;
  firstName?:String;
  secondName?:String;
  lastName?:String;
  age?:Number;
  race?:String;
  sex?:String;
  expedientNumber?:Number;
  active?:String;
  contractType?:String;
  defensePlace?:String;
  politiclist?:PoliticIntegration[];
  scholarShip?:Scholarship;
  position?:Position
  department?:Department;
  adress?:Adress;
  careerPlan:CareerPlan
  entidad:Entidad;
}
