import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from '../models/position';
import { ScaleGroup } from '../models/scale-group';
import { CargoService } from '../Services/cargo.service';
import { GrupoEscalaService } from '../Services/grupo-escala.service';


@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css']
})
export class CrearCargoComponent implements OnInit {

  constructor(private scaleS:GrupoEscalaService,private positionS:CargoService,private route:Router) { }

  ngOnInit(): void {
   this.getAllscales();
  }

  position:Position=new Position();
  prueba!:string;
  scaleList!:ScaleGroup[];
  listaCategoria:String[]=["D","T","S","O"];

 getAllscales(){
this.scaleS.getAll().subscribe(data=>{this.scaleList=data})
 }


  onSubmit(){
    this.positionS.create(this.position).subscribe(data=>{console.log(data)
    alert("Cargo creado con exito");
    this.route.navigate(["dashboard/calificadores/cargo"])

    })


}
}





