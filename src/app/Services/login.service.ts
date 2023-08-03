import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReques } from '../models/login-reques';
import { AuthToken } from '../models/token';
import { Statics } from '../statics';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpc:HttpClient) { }

loginUrl:String=Statics.BaseUrl+"login";



    login(request:LoginReques):Observable<AuthToken>{

    return this.httpc.post<AuthToken>(`${this.loginUrl}`,request);
}




}
