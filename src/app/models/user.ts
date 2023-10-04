import { Entidad } from "./entidad";
import { Role } from "./role";

export class User {
id:number;
username!:string
password!:string
roles:Role[];
entidad:Entidad;
}
