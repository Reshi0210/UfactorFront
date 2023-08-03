import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Department } from '../models/department';
import { Position } from '../models/position';
import { PoliticIntegration } from '../models/politic-integration';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
import { Statics } from '../statics';
@Injectable({
  providedIn: 'root'
})
export class CreateWorkerService {

  allDepasUrl:String=Statics.BaseUrl+"department/all"
  allposUrl:String=Statics.BaseUrl+"position/all"
  allpolUrl:String=Statics.BaseUrl+"politic/all"
  allscholUrl:String=Statics.BaseUrl+"scholar/all"
  createUrl:String=Statics.BaseUrl+"create"
  findByidUrl:String=Statics.BaseUrl+"findById"
  updateUrl:String=Statics.BaseUrl+"update"

  constructor(private httpc:HttpClient) { }

 getAllDepartment() :Observable<Department[]>{
  return this.httpc.get<Department[]>(`${this.allDepasUrl}`);//la ` se pone con Alt + 96
 }

 getAllpositions():Observable<Position[]>{
  return this.httpc.get<Position[]>(`${this.allposUrl}`)
 }

 getAllPolitics():Observable<PoliticIntegration[]>{
  return this.httpc.get<PoliticIntegration[]>(`${this.allpolUrl}`)
 }
 getAllScholars():Observable<Scholarship[]>{
  return this.httpc.get<Scholarship[]>(`${this.allscholUrl}`)
 }

createWorker(worker:Worker):Observable<object>{
 return this.httpc.post(`${this.createUrl}`,worker)
}

getWorkerById(id:number):Observable<Worker>{
  return this.httpc.get<Worker>(`${this.findByidUrl}/${id}`);
}

updateWorker(id:number,worker:Worker):Observable<object>{
  return this.httpc.put(`${this.updateUrl}/${id}`,worker)
 }

}
