import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { ApiFeriadoService } from '../api-feriado.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {
  data: any;
  resultado: any;
  d = new Date();
  correo = 'ca.abarzua@profesor.duoc.cl'; 
  sujeto = 'asistencia';
  cuerpo: any;
  visible = 'show';

  datos: any;
  feriados:any;

  constructor( public appComponent: AppComponent, private api: ApiFeriadoService) {}

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return utcDay !== 0 && utcDay !== 6;
  }

  ionViewWillEnter(){
    this.api.getFeriado().subscribe((data) =>{
      console.log(data.data)
      this.feriados=data.data;
    })
  }

  async permisos() {
    try {
      const permiso = await BarcodeScanner.checkPermission({force: true});
      if (permiso.granted) {
        return true;
      }
      return false;
    } catch(e) {
      console.log(e)
      return;
    }
  }

  async escanear() {
    try {
      const permiso = await this.permisos();
      if (!permiso) {
        console.log('sin permisos')
        return
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.visible = 'hidden';
      const resultado = await BarcodeScanner.startScan();
      console.log(resultado);
      this.visible = 'show';
      BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
      if (resultado?.hasContent) {
        this.resultado = resultado.content;
        console.log(this.resultado);
        this.cuerpo = resultado;
      }
    } catch (e) {
      console.log(e);
      this.pararScan();
    }
  }

  pararScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.visible = 'show';
  }

  ngOnDestroy(): void {
    this.pararScan();
  }

  ngOnInit(){
  }

}
