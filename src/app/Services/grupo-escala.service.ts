import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScaleGroup } from '../models/scale-group';
import { Statics } from '../statics';

@Injectable({
  providedIn: 'root'
})
export class GrupoEscalaService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String=Statics.BaseUrl+"scaleGroup/all"
  createUrl:String=Statics.BaseUrl+"scaleGroup/create"
  updateUrl:String=Statics.BaseUrl+"scaleGroup/update"
  findUrl:String=Statics.BaseUrl+"scaleGroup/findById"
  deleteUrl:String=Statics.BaseUrl+"scaleGroup/delete"


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
