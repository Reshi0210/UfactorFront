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
import { HttpClientModule } from '@angular/common/http';
import { FormularioIComponent } from './formulario-i/formulario-i.component';
import { FormularioUComponent } from './formulario-u/formulario-u.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    ContratosComponent,
    FormularioIComponent,
    FormularioUComponent,

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
