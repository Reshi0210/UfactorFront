import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalificadoresComponent } from './calificadores/calificadores.component';
import { ContratosComponent } from './contratos/contratos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioIComponent } from './formulario-i/formulario-i.component';
import { FormularioUComponent } from './formulario-u/formulario-u.component';
import { LoginComponent } from './login/login.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

const routes: Routes = [


   {path:"login",component:LoginComponent}
  ,{path:"",redirectTo:"/login",pathMatch:"full"}
  ,{path:"dashboard",component:DashboardComponent,
  children:[{ path:"plantilla",component:PlantillaComponent}
            ,{ path:"contratos",component:ContratosComponent }
            ,{path:"plantilla/formularioI",component:FormularioIComponent}
            ,{ path:"FormularioU/:id",component:FormularioUComponent}
            ,{path:"calificadores",component:CalificadoresComponent}
           ]
}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
