import { Component } from "@angular/core";


@Component({
  selector:"app-por-pais",
  templateUrl:"porPais.component.html"
})
export class PorPaisComponent{

  termino: string = "";

  buscar(){
    console.log(this.termino);
  }
};
