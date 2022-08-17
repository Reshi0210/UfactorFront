import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class PlantillaServiceService {

  private allurl:String="http://localhost:8092/api/v1/all"

  constructor(private httpc:HttpClient) { }

  getWorkersList():Observable<Worker[]>{
    return  this.httpc.get<Worker[]>(`${this.allurl}` );
  }
}
