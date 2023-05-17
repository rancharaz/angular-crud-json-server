import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type/data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

/* property to store the data in to view on html */
  productList:undefined | product[]; /* datatype with array */
/* variable to delete msg */
  productMessage:undefined | string;

  /* import productService from file services */
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  /* function is created to show reloaded product after delete */
  this.list();

    /* getting productList from product for result */
    this.product.productList().subscribe((result) => {
      console.warn(result);
      if (result) {
        /* display with productlist */
        this.productList=result;
      }
    })
  }
  /* delete by id function */
  deleteProduct(id:number){
    /* console.warn(id) */
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = "Product is deleted";

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 2000);
  }

  /* function is created to show reloaded product after delete */
  list(){
    this.product.productList().subscribe((result) => {
      console.warn(result);
      if (result) {
        /* display with productlist */
        this.productList=result;
      }
    })
  }
}
