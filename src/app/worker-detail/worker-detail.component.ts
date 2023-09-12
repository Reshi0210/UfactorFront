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
    any:any;
    anyL:any[];
    level:String;
  
    nada(){};


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
this.scholarS.findByLevel(level).subscribe(data=>{this.ListaScholar=data})
}

save(){
this.createWorkerService.createWorker(this.worker).subscribe(data=>{
  console.log(data);
  alert("Actualizado")
  })
}

}
