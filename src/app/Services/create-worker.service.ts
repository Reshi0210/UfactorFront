import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Department } from '../models/department';
import { Position } from '../models/position';
import { PoliticIntegration } from '../models/politic-integration';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
@Injectable({
  providedIn: 'root'
})
export class CreateWorkerService {

  allDepasUrl:String="http://localhost:8092/api/v1/department/all"
  allposUrl:String="http://localhost:8092/api/v1/position/all"
  allpolUrl:String="http://localhost:8092/api/v1/politic/all"
  allscholUrl:String="http://localhost:8092/api/v1/scholar/all"
  createUrl:String="http://localhost:8092/api/v1/create"

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

}
