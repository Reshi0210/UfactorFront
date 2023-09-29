import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  userList!:User[];
  user:User;


  getAll(){
    this.userService.getAllUsers().subscribe(data=>{this.userList=data})


  }


  delete(id:number){
    if (confirm("Esta a punto de borrar al Usuario de forma permanente,desea continuar?")){
      this.userService.delete(id).subscribe(data=>{
        this.getAll();
        console.log(data);
    
      });}
    
 
  }

  resetPass(id:number){
    this.userService.getById(id).subscribe(data=>{this.user=data
      
     this.user.password=prompt("Resetear password")
     this.userService.update(this.user.id,this.user).subscribe(data=>{
      alert("usuario actualizado")
  })

    })
   
  
  }

 

}
