import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../models/worker';
import { PlantillaServiceService } from '../Services/plantilla-service.service';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { CreateWorkerService } from '../Services/create-worker.service';
import { FilterService } from '../Services/filter.service';
import { delay } from 'rxjs';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {


  workerExample:Worker=new Worker ();
  scholarLevel!:string;
  criteria:string="";
  public workers!: Worker[];

  listaSexo:String[]=["M","F"];
  listaDefensa:String[]=["ORAE","Imprescindible","BDP","Reserva","NoIncorporado","Ninguno"];
  listaRaza:String[]=["Blanco","Negro","Mestizo"];
  listaContrato:String[]=["Determinado","Indeterminado","Ciclico","Fijo","Prueba"];
  ListaDepartamentos!:Department[];
  ListaPositions!:Position[];
  ListaPolitic!:PoliticIntegration[];
  ListaScholar!:Scholarship[];
  ListaScholarLevel:String[]=["TecMedio","Univ","PreUniv","Noveno","Doc","Master"];

  activeFilter:boolean=true;


  constructor(private plantS:PlantillaServiceService,private route:Router,private createWorkerService:CreateWorkerService,private filters:FilterService) { }


  ngOnInit(): void {
    this.getall();

  }
vaciarDepa(){
  delete this.workerExample.department
}
vaciarName(){
  delete this.workerExample.firstName
}

vaciarSName(){
  delete this.workerExample.secondName
}

vaciarlName(){
  delete this.workerExample.lastName
}
vaciarSex(){
  delete this.workerExample.sex
}
vaciarDef(){
  delete this.workerExample.defensePlace
}
vaciarExp(){
  delete this.workerExample.expedientNumber
}

vaciarCon(){
  delete this.workerExample.contractType
}
vaciarRace(){
  delete this.workerExample.race
}

vaciarSch(){
  this.scholarLevel="";

}



filterByCriteria(){

  this.filters.filterByCriteria(this.criteria).subscribe(data=>{this.workers=data
  console.log(data)
  })
}


filtrar(){
console.log(this.workerExample)
console.log(this.scholarLevel)
this.filters.filterByExample(this.workerExample,this.scholarLevel).subscribe(data=>{this.workers=data})
}


vaciar(){
 /* let currentUrl = this.route.url;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate([currentUrl]);
      this.activeFilter=true;*/


        delete this.workerExample.department
        delete this.workerExample.firstName
        delete this.workerExample.secondName
        delete this.workerExample.lastName
        delete this.workerExample.sex
        delete this.workerExample.defensePlace
        delete this.workerExample.expedientNumber
        delete this.workerExample.contractType
        delete this.workerExample.race
        this.scholarLevel="";




}

showFilters1(){
  if(!this.activeFilter)
  this.activeFilter=true;
  else{this.activeFilter=false;}
}

private getall(){

  this.plantS.getWorkersList().subscribe(data=> {this.workers=data});
  this.createWorkerService.getAllDepartment().subscribe(data=>{this.ListaDepartamentos=data})

  }

updateWorker(id:Number){
this.route.navigate(["FormularioU",id]);
}
deleteWorker(id:Number){
  this.plantS.deleteWorker(id).subscribe(data=>{
    this.getall();
    console.log(data);

  });



}


}
