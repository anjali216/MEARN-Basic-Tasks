import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent  implements OnInit {
  constructor(private api:ApiService,private route:ActivatedRoute){}

  product:any={}

  ngOnInit(): void {
   this.viewProduct()   
   
  }
    
  
  
  viewProduct(){
      //get id from [params]
      this.route.params.subscribe((res:any)=>{
        console.log(res)
         const {id}=res
         console.log(id);
         this.api.viewProductAPI(id).subscribe
         ((res:any)=>{
           console.log(res);
           this.product=res
         })
    })

  }
  
}
