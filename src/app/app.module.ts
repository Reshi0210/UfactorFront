import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ContratosComponent } from './contratos/contratos.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormularioIComponent } from './formulario-i/formulario-i.component';
import { FormularioUComponent } from './formulario-u/formulario-u.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalificadoresComponent } from './calificadores/calificadores.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PoliticaComponent } from './politica/politica.component';
import { CargoComponent } from './cargo/cargo.component';
import { GrupoEscalaComponent } from './grupo-escala/grupo-escala.component';
import { EscolaridadComponent } from './escolaridad/escolaridad.component';
import { CrearDepaComponent } from './crear-depa/crear-depa.component';
import { UpdateDepaComponent } from './update-depa/update-depa.component';
import { CrearIntegracionesPoliticasComponent } from './crear-integraciones-politicas/crear-integraciones-politicas.component';
import { UpdateIntegracionesPoliticasComponent } from './update-integraciones-politicas/update-integraciones-politicas.component';
import { CrearEscalaComponent } from './crear-escala/crear-escala.component';
import { UpdateEscalaComponent } from './update-escala/update-escala.component';
import { CrearCargoComponent } from './crear-cargo/crear-cargo.component';
import { UpdateCargoComponent } from './update-cargo/update-cargo.component';
import { CrearEscolaridadComponent } from './crear-escolaridad/crear-escolaridad.component';
import { UpdateEscolaridadComponent } from './update-escolaridad/update-escolaridad.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCommonModule} from '@angular/material/core';
import { AuthInterceptorInterceptor } from './Interceptors/auth-interceptor.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    ContratosComponent,
    FormularioIComponent,
    FormularioUComponent,
    LoginComponent,
    DashboardComponent,
    CalificadoresComponent,
    DepartamentoComponent,
    PoliticaComponent,
    CargoComponent,
    GrupoEscalaComponent,
    EscolaridadComponent,
    CrearDepaComponent,
    UpdateDepaComponent,
    CrearIntegracionesPoliticasComponent,
    UpdateIntegracionesPoliticasComponent,
    CrearEscalaComponent,
    UpdateEscalaComponent,
    CrearCargoComponent,
    UpdateCargoComponent,
    CrearEscolaridadComponent,
    UpdateEscolaridadComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    MatTreeModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
