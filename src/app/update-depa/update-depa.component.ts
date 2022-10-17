import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DepartamentoComponent } from '../departamento/departamento.component';
import { Department } from '../models/department';
import { DepaService } from '../Services/depa.service';

@Component({
  selector: 'app-update-depa',
  templateUrl: './update-depa.component.html',
  styleUrls: ['./update-depa.component.css']
})
export class UpdateDepaComponent implements OnInit {

  constructor(private route: Router,private aroute: ActivatedRoute,private depas:DepaService) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.depas.getDepaById(this.id).subscribe(data=>{this.depa=data});
  }

  depa!:Department;
  id!:number;

  onSubmit(){
    this.depas.updateDepa(this.id,this.depa).subscribe(data=>{console.log(data)
      alert("Departamento Actualizado con exito");
      this.route.navigate(["dashboard/calificadores/departamento"])

    })
  }

}
