import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  constructor(public fb:FormBuilder, private router: Router, private appComponent:AppComponent ) {
    this.formLogin=this.fb.group({
      'mail':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
    });
   }

  ingresar (){
    this.appComponent.nombre=this.formLogin.value['mail']
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
