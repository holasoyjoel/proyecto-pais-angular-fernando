import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector:"app-por-pais",
  templateUrl:"porPais.component.html"
})
export class PorPaisComponent{

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(){
    this.hayError = false;

    // OBSOLETO

    // this.paisService.buscarPais(this.termino)
    // .subscribe( (paises) => {
    //   console.log(paises);
    //   this.paises = paises;

    // },
    // (err) => {
    //   this.hayError = true;
    //   this.paises = [];
    // })

    // RECOMENDADO
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    })
  }

  constructor(private paisService: PaisService){}
};
