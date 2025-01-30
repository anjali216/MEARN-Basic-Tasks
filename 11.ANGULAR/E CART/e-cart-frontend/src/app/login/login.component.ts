import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,private api:ApiService,private router:Router){}

  loginForm = this.fb.group({
    email:[''],
    password:['']
  })

  login(){
    if(!this.loginForm.valid){
      alert("Please fill the form")
    }
    else{
       let email = this.loginForm.value.email;
       let password = this.loginForm.value.password
       const user={email,password}
      //api call
      this.api.loginAPI(user).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("Login Successful !!")
          this.router.navigateByUrl('/')
        },
        error:(err:any)=>{
          console.log(err);
          alert(err.error)
        }
      })
    }

  }

}
