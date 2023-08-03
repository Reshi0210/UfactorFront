import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { Worker } from '../models/worker';
import { CreateWorkerService } from '../Services/create-worker.service';

@Component({
  selector: 'app-formulario-u',
  templateUrl: './formulario-u.component.html',
  styleUrls: ['./formulario-u.component.css'],
})
export class FormularioUComponent implements OnInit {
  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    this.getfirst();
    this.getDepa();
    this.getAll();
    
  }
  worker: Worker = new Worker();
  id!: number;


  listaSexo: String[] = [
    'M',
    'F'
  ];
  listaDefensa: String[] = [
    'ORAE',
    'Imprescindible',
    'BDP',
    'Reserva',
    'NoIncorporado',
    'Ninguno',
  ];
  listaRaza: String[] = [
    'Blanco',
    'Negro',
    'Mestizo'
    ];
  listaContrato: String[] = [
    'Determinado',
    'Indeterminado',
    'Ciclico',
    'Fijo',
    'Prueba',
  ];
  ListaDepartamentos!: Department[];
  ListaPositions!: Position[];
  ListaPolitic!: PoliticIntegration[];
  ListaScholar!: Scholarship[];

  constructor(
    private createWorkerService: CreateWorkerService,
    private route: Router,
    private aroute: ActivatedRoute
  ) {}

  onSubmit(): void {
    this.saveNewWorker();
  }

  getfirst() {
    this.createWorkerService.getWorkerById(this.id).subscribe((data) => {
      this.worker = data;
    });
  }
  getDepa() {
    this.createWorkerService.getAllDepartment().subscribe((data) => {
      this.ListaDepartamentos = data;

      this.ListaDepartamentos.forEach((d) => {
        if (d.departamentName == this.worker.department?.departamentName) {
          var i = this.ListaDepartamentos.indexOf(d);
          this.ListaDepartamentos.splice(i, 1);
        }
      });
    });
  }
  getPositions() {
    this.createWorkerService.getAllpositions().subscribe((data) => {
      this.ListaPositions = data;

      this.ListaPositions.forEach((p) => {
        if (p.positionName == this.worker.position?.positionName) {
          var i = this.ListaPositions.indexOf(p);
          this.ListaPositions.splice(i, 1);
        }
      });
    });
  }

  getScholar() {
    this.createWorkerService.getAllScholars().subscribe((data) => {
      this.ListaScholar = data;
    

      this.ListaScholar.forEach((p) => {
        if (p.scholarName == this.worker.scholarShip.scholarName) {
          var i = this.ListaScholar.indexOf(p);
          this.ListaScholar.splice(i, 1);
        }
      });
    });
    
  }

  getAll() {
    this.createWorkerService.getAllPolitics().subscribe((data) => {
      this.ListaPolitic = data;
    });
    this.createWorkerService.getAllScholars().subscribe((data) => {
      this.ListaScholar = data;
   });
  }

  saveNewWorker() {
    this.createWorkerService
      .updateWorker(this.id, this.worker)
      .subscribe((data) => {
        console.log(data);
        alert('los datos del empleado han sido actualziados');
        this.goToPlantilla();
      });
  }

  goToPlantilla() {
    this.route.navigate(['dashboard/plantilla']);
  }
}
