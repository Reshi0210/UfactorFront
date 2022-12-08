import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScaleGroup } from '../models/scale-group';
import { GrupoEscalaService } from '../Services/grupo-escala.service';

@Component({
  selector: 'app-grupo-escala',
  templateUrl: './grupo-escala.component.html',
  styleUrls: ['./grupo-escala.component.css']
})
export class GrupoEscalaComponent implements OnInit {

  constructor(private scalesS:GrupoEscalaService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  scalesList!:ScaleGroup[];


  getAll(){
    this.scalesS.getAll().subscribe(data=>{this.scalesList=data})


  }

  update(id:number){
    this.route.navigate(["dashboard/calificadores/grupo-escala/update-escala",id]);
  }
  delete(id:number){
    if(confirm("Esta a punto de eliminar este grupo escala ,desea continuar?")){
    this.scalesS.delete(id).subscribe(data=>{console.log(data)
      this.getAll();
    },(error)=>{alert("no puede eliminar un grupo escala mientras halla algun cargo relacionado al mismo")})}
  }

}
