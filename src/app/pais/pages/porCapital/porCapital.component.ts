import { Component } from "@angular/core";
import { Country } from "../../interfaces/pais.interface";
import { PaisService } from '../../services/pais.service';


@Component({
  selector: "app-por-capital",
  templateUrl:"porCapital.component.html"
})
export class PorCapitalComponent{
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
    .subscribe({
      next: (paises)=>{
        console.log(paises);
        this.paises = paises;
      },
      error: (err)=>{
        this.hayError = true;
        this.paises = [];
      }
    })
  }

  constructor(
    private paisService: PaisService
  ){}
};
