import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage implements OnInit {

  contenidoQr = 'contenido';

  constructor() { }

  ngOnInit() {
  }

}
