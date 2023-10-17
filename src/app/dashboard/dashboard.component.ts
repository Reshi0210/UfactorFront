import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.getLogedUSer();
  }

  title = 'Ufactor';
  opened=false;
  showFiller = false;
  user:User;

 logOut(){
 localStorage.clear();
 this.router.navigate(["login"]);}

 getLogedUSer(){
  const userName=localStorage.getItem("userName");
 this.userService.getlogedUser(userName).subscribe(data=>{this.user=data
  localStorage.setItem("entidad",data.entidad.name.toString())

});
}

}
