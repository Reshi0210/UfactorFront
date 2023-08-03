import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../models/position';
import { Statics } from '../statics';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String=Statics.BaseUrl+"position/all"
  createUrl:String=Statics.BaseUrl+"position/create"
  updateUrl:String=Statics.BaseUrl+"position/update"
  findUrl:String=Statics.BaseUrl+"position/findById"
  deleteUrl:String=Statics.BaseUrl+"position/delete"


  getAll():Observable<Position []>{
    return this.httpc.get<Position []>(`${this.basicUrl}`);
  }
  create(position:Position):Observable<object>{
    return this.httpc.post<Position>(`${this.createUrl}`,position)
  }
  update(id:number,position:Position):Observable<object>{
    return this.httpc.put(`${this.updateUrl}/${id}`,position)
   }

   getById(id:number):Observable<Position>{
    return this.httpc.get<Position>(`${this.findUrl}/${id}`);
  }
  delete(id:Number):Observable<object>{
    return this.httpc.delete(`${this.deleteUrl}/${id}`)
  }

}
