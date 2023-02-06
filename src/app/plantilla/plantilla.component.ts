import { AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
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
export class PlantillaComponent implements OnInit ,AfterContentInit,DoCheck {

  HtmlElementToReport:HTMLElement;
  lista;

  workerExample:Worker=new Worker ();
  scholarLevel!:string;
  criteria:string="";
  public workers!: Worker[];
  activeFilter:boolean=false;
  min:number=0;
  max:number=100;

  listaSexo:String[]=["M","F"];
  listaDefensa:String[]=["ORAE","Imprescindible","BDP","Reserva","NoIncorporado","Ninguno"];
  listaRaza:String[]=["Blanco","Negro","Mestizo"];
  listaContrato:String[]=["Determinado","Indeterminado","Ciclico","Fijo","Prueba"];
  ListaDepartamentos!:Department[];
  ListaPositions!:Position[];
  ListaPolitic!:PoliticIntegration[];
  ListaScholar!:Scholarship[];
  ListaScholarLevel:String[]=["TecMedio","Univ","PreUniv","Noveno","Doc","Master"];
  listaActive:String[]=["active","nonActive"];




  constructor(private plantS:PlantillaServiceService,private route:Router,private createWorkerService:CreateWorkerService,private filters:FilterService) { }
  ngDoCheck(): void {
    this.lista=this.workers;
  }

  ngAfterContentInit(): void {
    this.HtmlElementToReport=document.getElementById("tableOfData");


  }

  ngOnInit(): void {
    this.getall();
    this.vaciar();
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

vaciarActive(){
  delete this.workerExample.active
}

vaciarAge(){
  this.min=0;
  this.max=100;
}



filterByCriteria(){

  this.filters.filterByCriteria(this.criteria).subscribe(data=>{this.workers=data
  console.log(data)
  })
}


filtrar(){
console.log(this.workerExample)
console.log(this.scholarLevel)
this.filters.filterByExample(this.workerExample,this.scholarLevel,this.min,this.max).subscribe(data=>{this.workers=data})
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
        delete this.workerExample.active
        this.scholarLevel="";
        this.min=0;
        this.max=100;




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
this.route.navigate(["dashboard/FormularioU",id]);
}

deleteWorker(id:Number){

  if (confirm("Esta a punto de borrar al trabajador de forma permanente,desea continuar?")){
  this.plantS.deleteWorker(id).subscribe(data=>{
    this.getall();
    console.log(data);

  });}



}

goToWorkerDetail(id:Number){
  this.route.navigate(["dashboard/worker-detail",id]);
  }



}
