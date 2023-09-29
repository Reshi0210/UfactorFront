import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../Services/user.service';
import { Route, Router } from '@angular/router';
import { Role } from '../models/role';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.admin.id=1
    this.admin.role="admin"
    this.usuario.id=2
    this.usuario.role="usuario"
    this.supervisor.id=3
    this.supervisor.role="supervisor"
  }

  user:User=new User();

  admin:Role=new Role()
  usuario:Role=new Role()
  supervisor:Role=new Role()


 
  roleList:Role[]=[this.admin,this.usuario,this.supervisor];

  onSubmit(){

this.userService.create(this.user).subscribe(data=>{console.log(data)
    alert("Usuario creado con exito");
   this.route.navigate(["dashboard/usuarios"])

  })
  }

}
