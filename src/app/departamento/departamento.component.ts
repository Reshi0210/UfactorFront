import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { DepaService } from '../Services/depa.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  constructor(private depas:DepaService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  depaList!:Department[];


  getAll(){
    this.depas.getAllDepas().subscribe(data=>{this.depaList=data})


  }

  updateDepa(id:number){
    this.route.navigate(["dashboard/calificadores/departamento/update-depa",id]);
  }
  deleteDepa(id:number){
    this.depas.deleteDepa(id).subscribe(data=>{console.log(data)
      this.getAll();
    })
  }

}
