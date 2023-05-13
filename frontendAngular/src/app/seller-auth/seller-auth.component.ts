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
/* parameter for login */
  showLogin = false;
/* authentication error */
authError:string = "";
  /* lifeCycle */
  ngOnInit():void{
    this.seller.reloadSeller();
  }
  /* signupfunction / include the data type in data */
  signUp(data:SignUp):void{
    /* getting data */
    this.seller.userSignup(data);
  }

  login(data:SignUp):void{
    /* clear login once relogin */
      this.authError="";
/*     console.log(data)*/    
      this.seller.userLogin(data);
      /* error handling */
     this.seller.isLoginError.subscribe((isError:any) => {
    if(isError){
      this.authError = "Email or password is not correct";
    }
  })
  }


  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;

  }
}
