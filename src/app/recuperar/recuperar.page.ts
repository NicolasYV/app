import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  email = new FormControl('');
  
  constructor(private router: Router) { }

  enviar() {
    
    this.router.navigate(['/login']);
  }

  alertButtons =['Entendido'];
  ngOnInit() {
  }

}
