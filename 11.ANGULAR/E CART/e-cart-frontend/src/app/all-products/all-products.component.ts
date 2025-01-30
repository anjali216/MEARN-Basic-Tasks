import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
constructor(private api:ApiService){}

products:any=[]

ngOnInit(): void{
  this.getProducts()
}


getProducts(){
  this.api.getAllProductsAPI().subscribe((item:any)=>{
    console.log(item);//array[]
    this.products = item
  })
}


}


