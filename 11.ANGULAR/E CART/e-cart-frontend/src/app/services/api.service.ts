import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http:HttpClient) { }

  baseUrl = 'http://localhost:3000'

  //get all products  details from  DB
  getAllProductsAPI(){
  return this.http.get(`${this.baseUrl}/allProducts`)
  }

  viewProductAPI(id:any){
    return this.http.get(`${this.baseUrl}/view/${id}`)
  }


  registerAPI(body:any){
   return this.http.post(`${this.baseUrl}/register`,body)
  }

  loginAPI(body:any){
    return this.http.post(`${this.baseUrl}/login`,body)
  }
}
