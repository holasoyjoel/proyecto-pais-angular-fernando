import { Component } from "@angular/core";
import { PaisService } from '../../services/pais.service';


@Component({
  selector:"app-por-pais",
  templateUrl:"porPais.component.html"
})
export class PorPaisComponent{

  termino: string = "";

  buscar(){
    this.paisService.buscarPais(this.termino)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  constructor(private paisService: PaisService){}
};
