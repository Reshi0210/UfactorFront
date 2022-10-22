import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliticIntegration } from '../models/politic-integration';
import { IntegracionesPoliticasService } from '../Services/integraciones-politicas.service';

@Component({
  selector: 'app-crear-integraciones-politicas',
  templateUrl: './crear-integraciones-politicas.component.html',
  styleUrls: ['./crear-integraciones-politicas.component.css']
})
export class CrearIntegracionesPoliticasComponent implements OnInit {

  constructor(private politicS:IntegracionesPoliticasService,private route:Router) { }

  ngOnInit(): void {
  }

  politic:PoliticIntegration=new PoliticIntegration();
  prueba!:string;

  onSubmit(){
    this.politicS.create(this.politic).subscribe(data=>{console.log(data)
    alert("Integracion Politica creada con exito");
    this.route.navigate(["dashboard/calificadores/politica"])

    })
  }

}
