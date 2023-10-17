import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
import { CreateWorkerService } from '../Services/create-worker.service';
import { FilterService } from '../Services/filter.service';
import { Province } from '../models/province';
import { Municipality } from '../models/municipality';
import { Adress } from '../models/adress';
import { UserService } from '../Services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-formulario-i',
  templateUrl: './formulario-i.component.html',
  styleUrls: ['./formulario-i.component.css']
})
export class FormularioIComponent implements OnInit {

 worker:Worker=new Worker ();
 workerCi!:Worker[];
 ciExist:boolean=false;
 province:Province;
 municipality:Municipality=new Municipality();
 adress:Adress=new Adress();
 street:String;
 avenue:String;
 numberOrPlace:String;
 user:User;
 




  listaSexo:String[]=["M","F"];
  listaDefensa:String[]=["ORAE","Imprescindible","BDP","Reserva","NoIncorporado","Ninguno"];
  listaRaza:String[]=["Blanco","Negro","Mestizo"];
  listaContrato:String[]=["Determinado","Indeterminado","Ciclico","Fijo","Prueba"];
  ListaDepartamentos!:Department[];
  ListaPositions!:Position[];
  ListaPolitic!:PoliticIntegration[];
  ListaScholar!:Scholarship[];
  ListaProvincia!:Province[];
  ListaMunicipios!:Municipality[];

  constructor(private createWorkerService:CreateWorkerService,
    private route:Router,private filterS:FilterService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getAll();
    this.getLogedUSer();

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
  this.createWorkerService.getAllProvinces().subscribe(data=>{this.ListaProvincia=data})
          }

   getAllMun (){
    this.createWorkerService.getAllMuniciplaities(this.province.id).subscribe(data=>{this.ListaMunicipios=data})

   }      

   saveNewWorker()   {
    this.worker.active="active"
    this.worker.adress=this.adress;
    this.worker.adress.municipality=this.municipality;
    this.worker.adress.province=this.province;
    this.worker.adress.street=this.street;
    this.worker.adress.avenue=this.avenue;
    this.worker.adress.numberOrPlace=this.numberOrPlace;
    this.worker.entidad=this.user.entidad;

    console.log(this.worker)

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

 getLogedUSer(){
  const userName=localStorage.getItem("userName");
 this.userService.getlogedUser(userName).subscribe(data=>this.user=data);
}

}
