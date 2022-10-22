import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoliticIntegration } from '../models/politic-integration';
import { IntegracionesPoliticasService } from '../Services/integraciones-politicas.service';

@Component({
  selector: 'app-update-integraciones-politicas',
  templateUrl: './update-integraciones-politicas.component.html',
  styleUrls: ['./update-integraciones-politicas.component.css']
})
export class UpdateIntegracionesPoliticasComponent implements OnInit {

  constructor(private route: Router,private aroute: ActivatedRoute,private politicS:IntegracionesPoliticasService) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.politicS.getById(this.id).subscribe(data=>{this.politic=data});
  }

  politic:PoliticIntegration=new PoliticIntegration();
  id!:number;

  onSubmit(){
    this.politicS.update(this.id,this.politic).subscribe(data=>{console.log(data)
      alert("Integracion Politica Actualizada con exito");
      this.route.navigate(["dashboard/calificadores/politica"])

    })
  }

}

