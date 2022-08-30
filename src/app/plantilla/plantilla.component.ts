import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../models/worker';
import { PlantillaServiceService } from '../Services/plantilla-service.service';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {


  constructor(private plantS:PlantillaServiceService,private route:Router) { }


  ngOnInit(): void {
    this.getall();
  }

public workers!: Worker[];



private getall(){

  this.plantS.getWorkersList().subscribe(data=> {this.workers=data});


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
