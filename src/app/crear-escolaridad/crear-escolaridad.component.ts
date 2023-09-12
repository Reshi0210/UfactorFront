import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scholarship } from '../models/scholarship';
import { EscolaridadService } from '../Services/escolaridad.service';

@Component({
  selector: 'app-crear-escolaridad',
  templateUrl: './crear-escolaridad.component.html',
  styleUrls: ['./crear-escolaridad.component.css']
})
export class CrearEscolaridadComponent implements OnInit {

  constructor(private scholarS:EscolaridadService,private route:Router) { }

  ngOnInit(): void {
  }

  scholar:Scholarship=new Scholarship();

 
  scholarLevelList:string[]=["TecMedio","Univ","PreUniv","Noveno","Doc","Master","Postgrado","Obrero","Idioma","FPiramidal","No_Procede"];

  onSubmit(){
    this.scholarS.create(this.scholar).subscribe(data=>{console.log(data)
    alert("Escolaridad Creada con exito");
    this.route.navigate(["dashboard/calificadores/escolaridad"])

    })
  }

}
