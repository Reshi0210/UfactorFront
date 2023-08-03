import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department';
import { Statics } from '../statics';

@Injectable({
  providedIn: 'root'
})
export class DepaService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String=Statics.BaseUrl+"department/all"
  createUrl:String=Statics.BaseUrl+"department/create"
  updateUrl:String=Statics.BaseUrl+"department/update"
  findUrl:String=Statics.BaseUrl+"department/findById"
  deleteUrl:String=Statics.BaseUrl+"department/delete"


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
