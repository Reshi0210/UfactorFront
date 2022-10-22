import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScaleGroup } from '../models/scale-group';
import { GrupoEscalaService } from '../Services/grupo-escala.service';

@Component({
  selector: 'app-crear-escala',
  templateUrl: './crear-escala.component.html',
  styleUrls: ['./crear-escala.component.css']
})
export class CrearEscalaComponent implements OnInit {

  constructor(private scaleS:GrupoEscalaService,private route:Router) { }

  ngOnInit(): void {
  }

  scale:ScaleGroup=new ScaleGroup();
  prueba!:string;

  onSubmit(){
    this.scaleS.create(this.scale).subscribe(data=>{console.log(data)
    alert("Grupo Escala creado con exito");
    this.route.navigate(["dashboard/calificadores/grupo-escala"])

    })
  }

}
