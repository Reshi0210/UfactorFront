import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scholarship } from '../models/scholarship';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String="http://localhost:8092/api/v1/scholar/all"
  createUrl:String="http://localhost:8092/api/v1/scholar/create"
  updateUrl:String="http://localhost:8092/api/v1/scholar/update"
  findUrl:String="http://localhost:8092/api/v1/scholar/findById"
  deleteUrl:String="http://localhost:8092/api/v1/scholar/delete"


  getAll():Observable<Scholarship []>{
    return this.httpc.get<Scholarship []>(`${this.basicUrl}`);
  }
  create(scholarship:Scholarship):Observable<object>{
    return this.httpc.post<Scholarship>(`${this.createUrl}`,scholarship)
  }
  update(id:number,scholarship:Scholarship):Observable<object>{
    return this.httpc.put(`${this.updateUrl}/${id}`,scholarship)
   }

   getById(id:number):Observable<Scholarship>{
    return this.httpc.get<Scholarship>(`${this.findUrl}/${id}`);
  }
  delete(id:Number):Observable<object>{
    return this.httpc.delete(`${this.deleteUrl}/${id}`)
  }

}



