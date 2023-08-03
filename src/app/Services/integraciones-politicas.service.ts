import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoliticIntegration } from '../models/politic-integration';
import { Statics } from '../statics';

@Injectable({
  providedIn: 'root'
})
export class IntegracionesPoliticasService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String=Statics.BaseUrl+"politic/all"
  createUrl:String=Statics.BaseUrl+"politic/create"
  updateUrl:String=Statics.BaseUrl+"politic/update"
  findUrl:String=Statics.BaseUrl+"politic/findById"
  deleteUrl:String=Statics.BaseUrl+"politic/delete"


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
