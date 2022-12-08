import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
import { CreateWorkerService } from '../Services/create-worker.service';
import { FilterService } from '../Services/filter.service';

@Component({
  selector: 'app-formulario-i',
  templateUrl: './formulario-i.component.html',
  styleUrls: ['./formulario-i.component.css']
})
export class FormularioIComponent implements OnInit {

 worker:Worker=new Worker ();
 workerCi!:Worker[];
 ciExist:boolean=false;




  listaSexo:String[]=["M","F"];
  listaDefensa:String[]=["ORAE","Imprescindible","BDP","Reserva","NoIncorporado","Ninguno"];
  listaRaza:String[]=["Blanco","Negro","Mestizo"];
  listaContrato:String[]=["Determinado","Indeterminado","Ciclico","Fijo","Prueba"];
  ListaDepartamentos!:Department[];
  ListaPositions!:Position[];
  ListaPolitic!:PoliticIntegration[];
  ListaScholar!:Scholarship[];

  constructor(private createWorkerService:CreateWorkerService,private route:Router,private filterS:FilterService) { }

  ngOnInit(): void {
    this.getAll();

  }

  onSubmit():void{
  if(this.workerCi.length==0){
   this.saveNewWorker();
  }
  else{
  alert("Este Carnet ya esta en uso")
 }

  }

  getAll(){
  this.createWorkerService.getAllDepartment().subscribe(data=>{this.ListaDepartamentos=data})
  this.createWorkerService.getAllpositions().subscribe(data=>{this.ListaPositions=data})
  this.createWorkerService.getAllPolitics().subscribe(data=>{this.ListaPolitic=data})
  this.createWorkerService.getAllScholars().subscribe(data=>{this.ListaScholar=data})
          }

   saveNewWorker()   {
    this.worker.active="active"
  this.createWorkerService.createWorker(this.worker).subscribe(data=>{
     console.log(data);
     alert("empleado Creado con exito");
     this.goToPlantilla();
  })
 }

 goToPlantilla(){
this.route.navigate(["dashboard/plantilla"]);

 }

 findByCi(){
this.filterS.filterByCriteria(this.worker.ci.toString()).subscribe(data=>{this.workerCi=data
console.log(data)
})

 }

}
