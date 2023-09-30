import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker';
import {HttpParams} from "@angular/common/http";
import { Statics } from '../statics';
import { Scholarship } from '../models/scholarship';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpc:HttpClient) { }

filterbyExampleUrl:String=Statics.BaseUrl+"filterByExample"
filterbyEUrl:String=Statics.BaseUrl+"filterE"
filterbyCriteriaUrl:String=Statics.BaseUrl+"filterByCriteria"
filterbyNed:String=Statics.BaseUrl+"filterByNed"


filterByExample(workerExample:Worker,min:number,max:number):Observable<Worker[]>{
  const headers=new HttpHeaders({
    "min":min.toString(),
    "max":max.toString(),
})


return this.httpc.post<Worker[]>(`${this.filterbyEUrl}`,workerExample,{headers});
  }

  filterByCriteria(criteria:string):Observable<Worker[]>{
    const headers=new HttpHeaders({
      "criteria":criteria,
  })

    return this.httpc.post<Worker[]>(`${this.filterbyCriteriaUrl}`,null,{headers})
  }

  filterByneds(scholarship:Scholarship):Observable<Worker[]>{
   return this.httpc.post<Worker[]>(`${this.filterbyNed}`,scholarship);
    }
  


}
