import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type/data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
/* import via sellerServices */  /*  instantiate router as private with Router module */
  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {
  }
  /* signupfunction / include the data type in data */
  signUp(data:SignUp):void{
    /* data */
    this.seller.userSignup(data).subscribe((result) => {
     /* redirect if result is 200 */
     if(result){
      this.router.navigate(['seller-home'])
     }
    });
  }
}
