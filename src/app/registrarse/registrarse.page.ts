import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { SqliteService } from '../service/sqlite.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit  {
  
  public name: string;
  public mail: string;
  public password: string;
  public users: string[];
    

  formReg:FormGroup;
  constructor(private fb:FormBuilder, private router: Router, private sqlite: SqliteService) {

    this.name='';
    this.mail='';
    this.password= '';
    this.users = [];
    
    this.formReg = this.fb.group({
      'name': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'mail': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'confirmPassword': new FormControl("", Validators.required),
    });
    
   }

   create(){
    // Creamos un elemento en la base de datos
    this.sqlite.create(this.name.toUpperCase(), this.mail.toUpperCase(), this.password.toUpperCase()).then( (changes) =>{
      console.log(changes);
      console.log("Creado");
      this.name = '';
      this.mail= '';
      this.password= '';
      this.router.navigate(['/login']);
    }).catch(err => {
      console.error(err);
      console.error("Error al crear");
    })

    
  }
  
  alertButtons =['Entendido'];

  ngOnInit() {

  }
  
  

}
