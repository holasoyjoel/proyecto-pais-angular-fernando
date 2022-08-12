import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorCapitalComponent } from './pages/porCapital/porCapital.component';
import { PorPaisComponent } from './pages/porPais/porPais.component';
import { PorRegionComponent } from './pages/porRegion/porRegion.component';
import { VerPaisComponent } from './pages/verPais/verPais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
