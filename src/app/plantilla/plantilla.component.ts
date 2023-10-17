import { AfterContentInit, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../models/worker';
import { PlantillaServiceService } from '../Services/plantilla-service.service';
import { Department } from '../models/department';
import { PoliticIntegration } from '../models/politic-integration';
import { Position } from '../models/position';
import { Scholarship } from '../models/scholarship';
import { CreateWorkerService } from '../Services/create-worker.service';
import { FilterService } from '../Services/filter.service';
import { delay } from 'rxjs';
import { Page } from '../page';
import { EscolaridadService } from '../Services/escolaridad.service';
import { User } from '../models/user';
import { UserService } from '../Services/user.service';
import { UsuariosComponent } from '../usuarios/usuarios.component';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit, AfterContentInit, DoCheck {

  HtmlElementToReport: HTMLElement;
  lista;



  workerExample: Worker = new Worker();
  scholarLevel!: string;
  scholarship: Scholarship = new Scholarship();
  criteria: string = "";
  workers
  activeFilter: boolean = false;
  min: number = 0;
  max: number = 100;
  page: Page;
  pageNumber: number = 0;
  pageSize: number = 50;


  listaSexo: String[] = ["M", "F"];
  listaDefensa: String[] = ["ORAE", "Imprescindible", "BDP", "Reserva", "NoIncorporado", "Ninguno"];
  listaRaza: String[] = ["Blanco", "Negro", "Mestizo"];
  listaContrato: String[] = ["Determinado", "Indeterminado", "Ciclico", "Fijo", "Prueba"];
  ListaDepartamentos!: Department[];
  ListaPositions!: Position[];
  ListaPolitic!: PoliticIntegration[];
  ListaScholar!: Scholarship[];
  ListaScholarLevel: String[] = ["TecMedio", "Univ", "PreUniv", "Noveno", "Doc", "Master"];
  listaActive: String[] = ["active", "nonActive"];




  constructor(private plantS: PlantillaServiceService, private route: Router,
    private createWorkerService: CreateWorkerService,
    private filters: FilterService,
    private scholarService: EscolaridadService,
    private userService: UserService
  ) { }

  ngDoCheck(): void {
    this.lista = this.workers;
  }

  ngAfterContentInit(): void {
    this.HtmlElementToReport = document.getElementById("tableOfData");


  }

  ngOnInit(): void {

    this.getall();
    this.getAllScholarship();
    this.vaciar();


  }
  vaciarDepa() {
    delete this.workerExample.department
  }
  vaciarName() {
    delete this.workerExample.firstName
  }

  vaciarSName() {
    delete this.workerExample.secondName
  }

  vaciarlName() {
    delete this.workerExample.lastName
  }
  vaciarSex() {
    delete this.workerExample.sex
  }
  vaciarDef() {
    delete this.workerExample.defensePlace
  }
  vaciarExp() {
    delete this.workerExample.expedientNumber
  }

  vaciarCon() {
    delete this.workerExample.contractType
  }
  vaciarRace() {
    delete this.workerExample.race
  }

  vaciarSch() {
    delete this.workerExample.scholarShip
    this.scholarLevel = null;

  }

  vaciarActive() {
    delete this.workerExample.active
  }

  vaciarAge() {
    this.min = 0;
    this.max = 100;
  }



  filterByCriteria() {

    this.filters.filterByCriteria(this.criteria).subscribe(data => {
      this.workers = data
      console.log(data)
    })
  }

  filterByNed() {
    this.filters.filterByneds(this.scholarship).subscribe(data => this.workers = data)


  }

  filtrar() {
    this.workerExample.scholarShip = this.scholarship;
    this.workerExample.scholarShip.scholarLevel = this.scholarLevel;
    console.log(this.workerExample);



    this.filters.filterByExample(this.workerExample, this.min, this.max).subscribe(data => { this.workers = data })
  }


  vaciar() {



    delete this.workerExample.department
    delete this.workerExample.firstName
    delete this.workerExample.secondName
    delete this.workerExample.lastName
    delete this.workerExample.sex
    delete this.workerExample.defensePlace
    delete this.workerExample.expedientNumber
    delete this.workerExample.contractType
    delete this.workerExample.race
    delete this.workerExample.active
    delete this.workerExample.scholarShip
    this.scholarLevel = null;
    this.min = 0;
    this.max = 100;




  }

  showFilters1() {
    if (!this.activeFilter)
      this.activeFilter = true;
    else { this.activeFilter = false; }
  }



  private getall() {

    this.plantS.getWorkersByEntidad(this.pageNumber, this.pageSize).subscribe(data => {
      this.page = data
      this.workers = this.page.content
    });
    this.createWorkerService.getAllDepartment().subscribe(data => { this.ListaDepartamentos = data })
  }

  getAllScholarship() {
    this.scholarService.getAll().subscribe(data => { this.ListaScholar = data })

  }


  updateWorker(id: Number) {
    this.route.navigate(["dashboard/FormularioU", id]);
  }

  deleteWorker(id: Number) {

    if (confirm("Esta a punto de borrar al trabajador de forma permanente,desea continuar?")) {
      this.plantS.deleteWorker(id).subscribe(data => {
        this.getall();
        console.log(data);

      });
    }



  }


  goToWorkerDetail(id: Number) {
    this.route.navigate(["dashboard/worker-detail", id]);
  }

  goToPage(pageNumberNew: number) {
    this.pageNumber = pageNumberNew;
    this.getall();

  }

  goToPageNext() {
    if (this.pageNumber < this.page.totalPages - 1) {
      this.pageNumber++;
      this.getall();
    }

  }
  goToPagePrevious() {
    this.pageNumber--;
    this.getall();

  }

}
