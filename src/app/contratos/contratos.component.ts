import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  lista:string[]=["hola","que","tal", "estas"];
  worker:Worker=new Worker ();


  constructor() { }

  ngOnInit(): void {
  }

}
