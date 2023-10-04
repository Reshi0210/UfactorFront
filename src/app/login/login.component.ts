import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { delay } from 'rxjs';
import { LoginReques } from '../models/login-reques';
import { AuthToken } from '../models/token';
import { LoginService } from '../Services/login.service';
import { PlantillaServiceService } from '../Services/plantilla-service.service';
import { Entidad } from '../models/entidad';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private logins:LoginService,private userService:UserService) { }



  //entidadList:Entidad[];
  ///entidad:Entidad;

  ngOnInit(): void {
    //this.allEntidades()
  }
 request:LoginReques=new LoginReques();





  onSubmit(){

this.logins.login(this.request).subscribe(data=>{console.log(data)

  localStorage.setItem("token",data.authToken);
  localStorage.setItem("userName",this.request.username);
  this.route.navigate(["/dashboard"]);
},
(error)=>{
  error.status==401? alert("Credenciales Incorrectas"):alert("Error")



})
}

//allEntidades()   {
 // this.userService.getAllEntidades().subscribe(data=>this.entidadList=data)
//}

}

