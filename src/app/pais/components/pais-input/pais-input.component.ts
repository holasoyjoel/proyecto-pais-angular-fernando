import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';

  buscar(){
    console.log('hola mundo');
    console.log(this.termino);
  }


  constructor() { }

  ngOnInit() {
  }

}
