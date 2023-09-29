import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
import { CreateWorkerService } from '../Services/create-worker.service';
import { EscolaridadService } from '../Services/escolaridad.service';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit, AfterContentInit,DoCheck{

  constructor( private createWorkerService: CreateWorkerService,
    private scholarS:EscolaridadService,
    private route: Router,
    private aroute: ActivatedRoute) { }



    worker: Worker = new Worker();
    id!: number;
    HtmlElementToReport:HTMLElement;
    WorkerToReport:Worker;
    ListaScholar:Scholarship[];
    level:String;
    editar1:boolean=true;
    editar2:boolean=true;
    editar3:boolean=true;
  
    


  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.getWorkerById();
   
  }
  ngAfterContentInit(): void {
    this.HtmlElementToReport=document.getElementById("details");
  }

  ngDoCheck(): void {
    this.WorkerToReport=this.worker;
  }


  getWorkerById() {
    this.createWorkerService.getWorkerById(this.id).subscribe((data) => {
      this.worker = data;
    });

}

getDoctorados(){
this.level="Doc";
this.getScholarByLevel(this.level);

}

getMasters(){
  this.level="Master";
  this.getScholarByLevel(this.level);
  
  }

getPostgrados(){
    this.level="Postgrado";
  this.getScholarByLevel(this.level);
  }

  getFormacionespiramidales(){
    this.level="FPiramidal";
  this.getScholarByLevel(this.level);

  }
  getIdiomas(){
    this.level="Idioma";
    this.getScholarByLevel(this.level);
  }



getScholarByLevel(level:String){
this.scholarS.findByLevel(level).subscribe(data=>{this.ListaScholar=data


})

}

save(){
this.createWorkerService.updateWorker(this.worker.id,this.worker).subscribe(data=>{
  console.log(data);
  alert("Actualizado")
  })
}
edit1(){
  if(this.editar1) 
  this.editar1=false
else this.editar1=true;
};
edit2(){
  if(this.editar2) 
  this.editar2=false
else this.editar2=true;
};

edit3(){
  if(this.editar3) 
  this.editar3=false
else this.editar3=true;
};


}
