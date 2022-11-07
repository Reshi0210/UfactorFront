import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReques } from '../models/login-reques';
import { AuthToken } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpc:HttpClient) { }

loginUrl:String="http://localhost:8092/api/v1/login";



    login(request:LoginReques):Observable<AuthToken>{

    return this.httpc.post<AuthToken>(`${this.loginUrl}`,request);
}




}
