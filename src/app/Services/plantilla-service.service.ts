import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker';
import { Statics } from '../statics';
import { Page } from '../page';
import { Entidad } from '../models/entidad';

@Injectable({
  providedIn: 'root'
})
export class PlantillaServiceService {

  private allurl:String=Statics.BaseUrl+"all"
  private deleteurl:String=Statics.BaseUrl+"delete"
  private workersByEntidad:String=Statics.BaseUrl+"filterByEntidad"

  constructor(private httpc:HttpClient) { }

  getWorkersList(page:number,size:number):Observable<Page>{
    const headers=new HttpHeaders({
      "page":page.toString(),
      "size":size.toString()
      })


return  this.httpc.get<Page>(`${this.allurl}`,{headers});
  }

  deleteWorker(id:Number):Observable<object>{
    return this.httpc.delete(`${this.deleteurl}/${id}`)
  }

  getWorkersByEntidad(page:number,size:number):Observable<Page>{
    const headers=new HttpHeaders({
      "page":page.toString(),
      "size":size.toString(),
      "entidad":localStorage.getItem("entidad"),})


return  this.httpc.post<Page>(`${this.workersByEntidad}`,null,{headers});
  }

}
