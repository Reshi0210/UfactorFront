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
filterbyCriteriaUrl="http://localhost:8092/api/v1/filterByCriteria"

/*filterByExample(workerExample:Worker):Observable<Worker[]>{

return this.httpc.post<Worker[]>(`${this.filterbyExampleUrl}`,workerExample);
}*/

filterByExample(workerExample:Worker,level:string,min:number,max:number):Observable<Worker[]>{

  const headers=new HttpHeaders({
    "level":level,
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


}
