import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scholarship } from '../models/scholarship';
import { EscolaridadService } from '../Services/escolaridad.service';

@Component({
  selector: 'app-escolaridad',
  templateUrl: './escolaridad.component.html',
  styleUrls: ['./escolaridad.component.css']
})
export class EscolaridadComponent implements OnInit {

  constructor(private scholarS:EscolaridadService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  scholarList!:Scholarship[];


  getAll(){
    this.scholarS.getAll().subscribe(data=>{this.scholarList=data})


  }

  update(id:number){
    this.route.navigate(["dashboard/calificadores/escolaridad/update-escolaridad",id]);
  }
  delete(id:number){
    this.scholarS.delete(id).subscribe(data=>{console.log(data)
      this.getAll();
    })
  }

}
