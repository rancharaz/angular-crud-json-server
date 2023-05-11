import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';/* use to call api */
import { SignUp } from '../data-type/data-type';



@Injectable({
  providedIn: 'root'
})
export class SellerService {
/* instantiate httpclient for calling api for usage */
  constructor(private http:HttpClient) { }

  /* signup service */
  /* data object from data function signup  //datatype in data  */
  userSignup(data:SignUp){
    /* post method */
    return this.http.post('http://localhost:3000/seller', data);
  }
}
