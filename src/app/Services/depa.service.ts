import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepaService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String="http://localhost:8092/api/v1/department/all"
  createUrl:String="http://localhost:8092/api/v1/department/create"
  updateUrl:String="http://localhost:8092/api/v1/department/update"
  findUrl:String="http://localhost:8092/api/v1/department/findById"
  deleteUrl:String="http://localhost:8092/api/v1/department/delete"


  getAllDepas():Observable<Department []>{
    return this.httpc.get<Department []>(`${this.basicUrl}`);
  }
  createDepa(depa:Department):Observable<object>{
    return this.httpc.post<Department>(`${this.createUrl}`,depa)
  }
  updateDepa(id:number,depa:Department):Observable<object>{
    return this.httpc.put(`${this.updateUrl}/${id}`,depa)
   }

   getDepaById(id:number):Observable<Department>{
    return this.httpc.get<Department>(`${this.findUrl}/${id}`);
  }
  deleteDepa(id:Number):Observable<object>{
    return this.httpc.delete(`${this.deleteUrl}/${id}`)
  }

}
