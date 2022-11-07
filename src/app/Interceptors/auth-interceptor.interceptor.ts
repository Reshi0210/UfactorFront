import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("*************************Interceptor********************************")

    let requestClone=request;

   if(!this.Islogin(request.url)){


  const token=localStorage.getItem("token");
    requestClone=request.clone(
    {
    headers:request.headers.set( 'Authorization',`Bearer ${token}`)



   }
   );

  }

    return next.handle(requestClone);
  }

  private Islogin(url:String):boolean{

    return url.search("/login")!=-1
  }
}
