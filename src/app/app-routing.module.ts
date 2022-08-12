import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/porCapital/porCapital.component";
import { PorPaisComponent } from "./pais/pages/porPais/porPais.component";
import { PorRegionComponent } from "./pais/pages/porRegion/porRegion.component";
import { VerPaisComponent } from "./pais/pages/verPais/verPais.component";

const routes: Routes = [

  // primera ruta
  {
    path: "",
    component: PorPaisComponent,
    pathMatch: "full"
  },

  // segunda ruta
  {
    path:"region",
    component: PorRegionComponent
  },

  // tercera ruta
  {
    path:"capital",
    component: PorCapitalComponent
  },

  // cuarta ruta
  {
    path: "pais/:id",
    component: VerPaisComponent
  },

  // quinta ruta
  {
    path: "**",
    redirectTo: ""
  }

];


@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{};
