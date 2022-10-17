import { Component, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { Department } from '../models/department';
import { DepaService } from '../Services/depa.service';

@Component({
  selector: 'app-crear-depa',
  templateUrl: './crear-depa.component.html',
  styleUrls: ['./crear-depa.component.css']
})
export class CrearDepaComponent implements OnInit {

  constructor(private depas:DepaService,private route:Router) { }

  ngOnInit(): void {
  }

  depa:Department=new Department();
  prueba!:string;

  onSubmit(){
    this.depas.createDepa(this.depa).subscribe(data=>{console.log(data)
    alert("Departamento creado con exito");
    this.route.navigate(["dashboard/calificadores/departamento"])

    })
  }

}
