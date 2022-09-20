import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpc:HttpClient) { }

filterbyExampleUrl:String="http://localhost:8092/api/v1/filterByExample"
filterbyEUrl:String="http://localhost:8092/api/v1/filterE"


/*filterByExample(workerExample:Worker):Observable<Worker[]>{

return this.httpc.post<Worker[]>(`${this.filterbyExampleUrl}`,workerExample);
}*/

filterByExample(workerExample:Worker,level:string):Observable<Worker[]>{

  const headers=new HttpHeaders({
    "level":level,
})
 return this.httpc.post<Worker[]>(`${this.filterbyEUrl}`,workerExample,{headers});
  }



}
