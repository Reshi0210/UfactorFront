import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
import { CreateWorkerService } from '../Services/create-worker.service';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit, AfterContentInit{

  constructor( private createWorkerService: CreateWorkerService,
    private route: Router,
    private aroute: ActivatedRoute) { }


    worker: Worker = new Worker();
    id!: number;
    HtmlElementToReport:HTMLElement;


  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.getWorkerById();
  }
  ngAfterContentInit(): void {
    this.HtmlElementToReport=document.getElementById("details");
  }


  getWorkerById() {
    this.createWorkerService.getWorkerById(this.id).subscribe((data) => {
      this.worker = data;
    });

}
}
