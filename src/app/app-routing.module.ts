import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContratosComponent } from './contratos/contratos.component';
import { FormularioIComponent } from './formulario-i/formulario-i.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

const routes: Routes = [

 { path:"plantilla",component:PlantillaComponent,}
,{ path:"contratos",component:ContratosComponent, }
,{ path:"formularioI",component:FormularioIComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
