import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { delay } from 'rxjs';
import { LoginReques } from '../models/login-reques';
import { AuthToken } from '../models/token';
import { LoginService } from '../Services/login.service';
import { PlantillaServiceService } from '../Services/plantilla-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private logins:LoginService) { }

  ngOnInit(): void {
  }
 request:LoginReques=new LoginReques();





  onSubmit(){

this.logins.login(this.request).subscribe(data=>{console.log(data)

  localStorage.setItem("token",data.authToken)
},
(error)=>{
  error.status==401? alert("Credenciales Incorrectas"):alert("Error")



})

setTimeout(() => {this.route.navigate(["/dashboard"]);}, 300);



}


}

