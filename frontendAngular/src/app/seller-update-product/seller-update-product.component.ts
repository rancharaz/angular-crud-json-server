import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';/* module to get route from loop to show */
import { ProductService } from '../services/product.service';/* getting the product service */
import { product } from '../data-type/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
/* activate route id from url */
  constructor(private route: ActivatedRoute, private product:ProductService) { }
/* variable to add the data from get */
productData:undefined | product
  ngOnInit(): void {
    /* id from url */
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    this.product.getProduct(productId).subscribe((data) => {
      console.log(data);
/* all data is init */
      this.productData = data;
    })
  }
  submit(data:any){

  }
}
