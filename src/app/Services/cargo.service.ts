import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String="http://localhost:8092/api/v1/position/all"
  createUrl:String="http://localhost:8092/api/v1/position/create"
  updateUrl:String="http://localhost:8092/api/v1/position/update"
  findUrl:String="http://localhost:8092/api/v1/position/findById"
  deleteUrl:String="http://localhost:8092/api/v1/position/delete"


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
