import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../models/position';
import { CargoService } from '../Services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  constructor(private positionS:CargoService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  positionsList!:Position[];


  getAll(){
    this.positionS.getAll().subscribe(data=>{this.positionsList=data})


  }

  update(id:number){
    this.route.navigate(["dashboard/calificadores/cargo/update-cargo",id]);
  }


  delete(id:number){
    if(confirm("Esta a punto de eliminar este Cargo,desea continuar?")){
    this.positionS.delete(id).subscribe(data=>{console.log(data)
      this.getAll();

    },(error)=>{alert("No puede eliminar un cargo que pertenezca a un trabajador activo")})
  }}

}
