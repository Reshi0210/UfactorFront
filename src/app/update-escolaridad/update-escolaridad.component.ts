import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scholarship } from '../models/scholarship';
import { EscolaridadService } from '../Services/escolaridad.service';

@Component({
  selector: 'app-update-escolaridad',
  templateUrl: './update-escolaridad.component.html',
  styleUrls: ['./update-escolaridad.component.css']
})
export class UpdateEscolaridadComponent implements OnInit {

  constructor(private scholarS:EscolaridadService,private route:Router,private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.scholarS.getById(this.id).subscribe(data=>{this.scholar=data});
  }

  id!:number;
  scholar:Scholarship=new Scholarship();


  scholarLevelList:string[]=["TecMedio","Univ","PreUniv","Noveno","Doc","Master","Postgrado","Obrero","Idioma","FPiramidal","No_Procede"];

  onSubmit(){
    this.scholarS.update(this.id,this.scholar).subscribe(data=>{console.log(data)
    alert("Escolaridad Actualziada con exito");
    this.route.navigate(["dashboard/calificadores/escolaridad"])

    })

}
}
