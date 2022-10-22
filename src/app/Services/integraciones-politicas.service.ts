import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoliticIntegration } from '../models/politic-integration';

@Injectable({
  providedIn: 'root'
})
export class IntegracionesPoliticasService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String="http://localhost:8092/api/v1/politic/all"
  createUrl:String="http://localhost:8092/api/v1/politic/create"
  updateUrl:String="http://localhost:8092/api/v1/politic/update"
  findUrl:String="http://localhost:8092/api/v1/politic/findById"
  deleteUrl:String="http://localhost:8092/api/v1/politic/delete"


  getAll():Observable<PoliticIntegration []>{
    return this.httpc.get<PoliticIntegration []>(`${this.basicUrl}`);
  }
  create(politic:PoliticIntegration):Observable<object>{
    return this.httpc.post<PoliticIntegration>(`${this.createUrl}`,politic)
  }
  update(id:number,politic:PoliticIntegration):Observable<object>{
    return this.httpc.put(`${this.updateUrl}/${id}`,politic)
   }

   getById(id:number):Observable<PoliticIntegration>{
    return this.httpc.get<PoliticIntegration>(`${this.findUrl}/${id}`);
  }
  delete(id:Number):Observable<object>{
    return this.httpc.delete(`${this.deleteUrl}/${id}`)
  }

}
