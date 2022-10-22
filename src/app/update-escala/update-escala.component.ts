import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScaleGroup } from '../models/scale-group';
import { GrupoEscalaService } from '../Services/grupo-escala.service';

@Component({
  selector: 'app-update-escala',
  templateUrl: './update-escala.component.html',
  styleUrls: ['./update-escala.component.css']
})
export class UpdateEscalaComponent implements OnInit {

  constructor(private route: Router,private aroute: ActivatedRoute,private scaleS:GrupoEscalaService) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.scaleS.getById(this.id).subscribe(data=>{this.scale=data});
  }

  scale:ScaleGroup=new ScaleGroup();
  id!:number;

  onSubmit(){
    this.scaleS.update(this.id,this.scale).subscribe(data=>{console.log(data)
      alert("Grupo Escala Actualizado con exito");
      this.route.navigate(["dashboard/calificadores/grupo-escala"])

    })
  }

}
