import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    msg:string ="Welcome to Login page"
    value:boolean=true;
    num:Number=343

    loginImg:string="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729209600&semt=ais_hybrid"

btnClick(){
  alert("Button clicked")
}

}
