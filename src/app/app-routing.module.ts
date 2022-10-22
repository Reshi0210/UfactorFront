import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalificadoresComponent } from './calificadores/calificadores.component';
import { CargoComponent } from './cargo/cargo.component';
import { ContratosComponent } from './contratos/contratos.component';
import { CrearCargoComponent } from './crear-cargo/crear-cargo.component';
import { CrearDepaComponent } from './crear-depa/crear-depa.component';
import { CrearEscalaComponent } from './crear-escala/crear-escala.component';
import { CrearEscolaridadComponent } from './crear-escolaridad/crear-escolaridad.component';
import { CrearIntegracionesPoliticasComponent } from './crear-integraciones-politicas/crear-integraciones-politicas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { EscolaridadComponent } from './escolaridad/escolaridad.component';
import { FormularioIComponent } from './formulario-i/formulario-i.component';
import { FormularioUComponent } from './formulario-u/formulario-u.component';
import { GrupoEscalaComponent } from './grupo-escala/grupo-escala.component';
import { LoginComponent } from './login/login.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { PoliticaComponent } from './politica/politica.component';
import { UpdateCargoComponent } from './update-cargo/update-cargo.component';
import { UpdateDepaComponent } from './update-depa/update-depa.component';
import { UpdateEscalaComponent } from './update-escala/update-escala.component';
import { UpdateEscolaridadComponent } from './update-escolaridad/update-escolaridad.component';
import { UpdateIntegracionesPoliticasComponent } from './update-integraciones-politicas/update-integraciones-politicas.component';

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
                    ,{path:"politica/crear-politic",component:CrearIntegracionesPoliticasComponent}
                    ,{path:"politica/update-politic/:id",component:UpdateIntegracionesPoliticasComponent}
                    ,{path:"grupo-escala/crear-escala",component:CrearEscalaComponent}
                    ,{path:"grupo-escala/update-escala/:id",component:UpdateEscalaComponent}
                    ,{path:"cargo/crear-cargo",component:CrearCargoComponent}
                    ,{path:"cargo/update-cargo/:id",component:UpdateCargoComponent}
                    ,{path:"escolaridad/crear-escolaridad",component:CrearEscolaridadComponent}
                    ,{path:"escolaridad/update-escolaridad/:id",component:UpdateEscolaridadComponent}
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
