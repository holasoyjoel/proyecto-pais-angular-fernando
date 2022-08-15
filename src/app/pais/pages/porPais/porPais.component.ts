import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { PaisService } from '../../services/pais.service';


@Component({
  selector:"app-por-pais",
  templateUrl:"porPais.component.html"
})
export class PorPaisComponent{

  termino: string = "";
  hayError: boolean = false;


  buscar(){
    this.hayError = false;
    this.paisService.buscarPais(this.termino)
    .subscribe( (resp) => {
      console.log(resp);
    },
    (err) => {
      this.hayError = true;
    })

  }

  constructor(private paisService: PaisService){}
};
