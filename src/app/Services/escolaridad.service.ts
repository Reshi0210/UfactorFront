import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scholarship } from '../models/scholarship';
import { Statics } from '../statics';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadService {

  constructor(private httpc:HttpClient) { }

  basicUrl:String=Statics.BaseUrl+"scholar/all"
  createUrl:String=Statics.BaseUrl+"scholar/create"
  updateUrl:String=Statics.BaseUrl+"scholar/update"
  findUrl:String=Statics.BaseUrl+"scholar/findById"
  deleteUrl:String=Statics.BaseUrl+"scholar/delete"
  finByleveldUrl:String=Statics.BaseUrl+"scholar/findByLevel"


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

  findByLevel(level:String):Observable<Scholarship []>{
    return this.httpc.get<Scholarship []>(`${this.finByleveldUrl}/${level}`);
  }

}



