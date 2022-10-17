import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalificadoresComponent } from './calificadores/calificadores.component';
import { CargoComponent } from './cargo/cargo.component';
import { ContratosComponent } from './contratos/contratos.component';
import { CrearDepaComponent } from './crear-depa/crear-depa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { EscolaridadComponent } from './escolaridad/escolaridad.component';
import { FormularioIComponent } from './formulario-i/formulario-i.component';
import { FormularioUComponent } from './formulario-u/formulario-u.component';
import { GrupoEscalaComponent } from './grupo-escala/grupo-escala.component';
import { LoginComponent } from './login/login.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { PoliticaComponent } from './politica/politica.component';
import { UpdateDepaComponent } from './update-depa/update-depa.component';

const routes: Routes = [


   {path:"login",component:LoginComponent}
  ,{path:"",redirectTo:"/login",pathMatch:"full"}
  ,{path:"dashboard",component:DashboardComponent,
  children:[{ path:"plantilla",component:PlantillaComponent}
            ,{ path:"contratos",component:ContratosComponent }
            ,{path:"plantilla/formularioI",component:FormularioIComponent}
            ,{ path:"FormularioU/:id",component:FormularioUComponent}
            ,{path:"calificadores",component:CalificadoresComponent,
          children:[{path:"departamento",component:DepartamentoComponent}
                    ,{path:"politica",component:PoliticaComponent}
                    ,{path:"cargo",component:CargoComponent}
                    ,{path:"grupo-escala",component:GrupoEscalaComponent}
                    ,{path:"escolaridad",component:EscolaridadComponent}
                    ,{path:"departamento/crear-depa",component:CrearDepaComponent}
                    ,{path:"departamento/update-depa/:id",component:UpdateDepaComponent}
        ]
          }
           ]
}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
