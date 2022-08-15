import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Output()onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output()onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();



  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

  constructor() { }

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor => {
      this.onDebounce.emit(valor)
    })
  }

}
