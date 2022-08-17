import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';
import { PlantillaServiceService } from '../Services/plantilla-service.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {


  constructor(private plantS:PlantillaServiceService) { }


  ngOnInit(): void {
    this.getall();
  }

public workers!: Worker[];

private getall(){

  this.plantS.getWorkersList().subscribe(data=> {this.workers=data});
  }

}
