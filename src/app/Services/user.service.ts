import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statics } from '../statics';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private httpc:HttpClient) { }

  allUrl:String=Statics.BaseUrl+"user/all";
  FindByIdUrl:String=Statics.BaseUrl+"user/findb";
  createUrl:String=Statics.BaseUrl+"user/create"
  updateUrl:String=Statics.BaseUrl+"user/update"
  findUrl:String=Statics.BaseUrl+"user/findById"
  deleteUrl:String=Statics.BaseUrl+"user/delete"
  allEntidadesUrl:String=Statics.BaseUrl+"entidades/all";
  getlogedUserUrl:String=Statics.BaseUrl+"user/getlogedUser";


getAllUsers():Observable<User[]>{
  return this.httpc.get<User[]>(`${this.allUrl}`);
}

create(user:User):Observable<object>{
  return this.httpc.post<User>(`${this.createUrl}`,user)
}
update(id:number,user:User):Observable<object>{
  return this.httpc.put(`${this.updateUrl}/${id}`,user)
 }

 getById(id:number):Observable<User>{
  return this.httpc.get<User>(`${this.findUrl}/${id}`);
}
delete(id:Number):Observable<object>{
  return this.httpc.delete(`${this.deleteUrl}/${id}`)
}

getAllEntidades():Observable<Entidad[]>{
  return this.httpc.get<Entidad[]>(`${this.allEntidadesUrl}`);
}

getlogedUser(userName:String):Observable<User>{
  return this.httpc.get<User>(`${this.getlogedUserUrl}/${userName}`);
}


}