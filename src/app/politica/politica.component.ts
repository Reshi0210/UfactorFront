import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliticIntegration } from '../models/politic-integration';
import { IntegracionesPoliticasService } from '../Services/integraciones-politicas.service';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {
  constructor(private politicS:IntegracionesPoliticasService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  poliList!:PoliticIntegration[];


  getAll(){
    this.politicS.getAll().subscribe(data=>{this.poliList=data})


  }

  update(id:number){
    this.route.navigate(["dashboard/calificadores/politica/update-politic",id]);
  }
  delete(id:number){
    if(confirm("Esta a punto de eliminar esta organizacion politica ,desea continuar?")){
    this.politicS.delete(id).subscribe(data=>{console.log(data)
      this.getAll();
    },(error)=>{alert("no puede eliminar una organziacion politica si algun trabajador pertenece a ella")})}
  }

}
