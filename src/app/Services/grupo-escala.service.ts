import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScaleGroup } from '../models/scale-group';

@Injectable({
  providedIn: 'root'
})
export class GrupoEscalaService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String="http://localhost:8092/api/v1/scaleGroup/all"
  createUrl:String="http://localhost:8092/api/v1/scaleGroup/create"
  updateUrl:String="http://localhost:8092/api/v1/scaleGroup/update"
  findUrl:String="http://localhost:8092/api/v1/scaleGroup/findById"
  deleteUrl:String="http://localhost:8092/api/v1/scaleGroup/delete"


  getAll():Observable<ScaleGroup []>{
    return this.httpc.get<ScaleGroup []>(`${this.basicUrl}`);
  }
  create(scale:ScaleGroup):Observable<object>{
    return this.httpc.post<ScaleGroup>(`${this.createUrl}`,scale)
  }
  update(id:number,politic:ScaleGroup):Observable<object>{
    return this.httpc.put(`${this.updateUrl}/${id}`,politic)
   }

   getById(id:number):Observable<ScaleGroup>{
    return this.httpc.get<ScaleGroup>(`${this.findUrl}/${id}`);
  }
  delete(id:Number):Observable<object>{
    return this.httpc.delete(`${this.deleteUrl}/${id}`)
  }

}
