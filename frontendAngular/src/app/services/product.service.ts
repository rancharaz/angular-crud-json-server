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

  /*  getproduct to update*/
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  /* update product */
  /* everything will be in the product parameter  */
  updateProduct(product:product){
    /* product as data to second parameter */
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product)
  }
}
