import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpc:HttpClient) { }

filterbyExampleUrl:String="http://localhost:8092/api/v1/filterByExample"


filterByExample(workerExample:Worker):Observable<Worker[]>{

return this.httpc.post<Worker[]>(`${this.filterbyExampleUrl}`,workerExample);
}

}
