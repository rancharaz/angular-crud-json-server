import { Injectable } from '@angular/core';
import { product } from '../data-type/data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  /* add product service */
  addProduct(data:product){
    /* console.warn("Service is called"); */
    return this.http.post(`http://localhost:3000/products`, data)
  }
  /* get products service */
  productList(){
    /* the result will be array of product datatype */
    return this.http.get<product[]>(`http://localhost:3000/products`)
  }
  /* delete by id api  */
  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)

  }
}
