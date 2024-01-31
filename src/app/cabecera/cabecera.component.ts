import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent  implements OnInit {

  constructor(private menuController:MenuController, public appComponent:AppComponent) { }
  openMenu(){
    this.menuController.open('menu');
  }

  ngOnInit() {}

}
