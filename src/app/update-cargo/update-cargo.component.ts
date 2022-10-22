import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../models/position';
import { ScaleGroup } from '../models/scale-group';
import { CargoService } from '../Services/cargo.service';
import { GrupoEscalaService } from '../Services/grupo-escala.service';

@Component({
  selector: 'app-update-cargo',
  templateUrl: './update-cargo.component.html',
  styleUrls: ['./update-cargo.component.css']
})
export class UpdateCargoComponent implements OnInit {

  constructor(private scaleS:GrupoEscalaService,private positionS:CargoService,private route:Router,private aroute: ActivatedRoute) { }

  ngOnInit(): void {
   this.getAllscales();
   this.id = this.aroute.snapshot.params['id'];
  this.positionS.getById(this.id).subscribe(data=>{this.position=data});
  }

  position:Position=new Position();
  prueba!:string;
  scaleList!:ScaleGroup[];
  listaCategoria:String[]=["D","T","S","O"];
  id!:number;

 getAllscales(){
this.scaleS.getAll().subscribe(data=>{this.scaleList=data})
 }


  onSubmit(){
    this.positionS.update(this.id,this.position).subscribe(data=>{console.log(data)
    alert("Cargo Actualziado con exito");
    this.route.navigate(["dashboard/calificadores/cargo"])

    })


}
}
