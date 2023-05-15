import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  constructor(private product:ProductService) { }
  /* alert message for adding */
  addProductMessage:String |undefined;


  ngOnInit(): void {
  }
  /* add datatype as parameter */
  submit(data: product) {
    console.log(data);
    /* data  is being passed*/
    this.product.addProduct(data).subscribe((result) => {
 /* if result 200 show message */
      if(result){
        this.addProductMessage = "Product is added successfully";
      }
    });
/* settimeout to stop message */
    setTimeout(() => {
      this.addProductMessage=undefined;
    }, 4000);
  }
}
