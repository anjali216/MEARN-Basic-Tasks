import { Component } from '@angular/core';
import { userModel } from '../userModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    user:userModel={}//to hold user details


    constructor(private api:UserService,private route:Router) {}

    addUser(){
    this.api.addUserAPI(this.user).subscribe({
      next:(item:any)=>{
        console.log(item);
        alert("User added successfully...")
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    //console.log(this.user);
  }



  
}

