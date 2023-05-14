import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/* for condition and can be use in html */
  menuType:string = 'default';

  sellerName:string = ""; /* sellername for condition in html */

  /* intantiate router module */
  constructor(private route:Router) { }

  ngOnInit(): void {


    /* getting the href path */
    this.route.events.subscribe((value:any) => {
      if(value.url){
      /*   console.warn(value.url); */
        /* if login value and contain seller in href*/
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
        /* getting the name of the seller in localStorage */
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0]; /* array so 0 1st one */
          this.sellerName = sellerData.name;/* getting name */
          this.menuType = "seller"


        } else {
         /*  console.warn("Outside seller area"); */
          this.menuType = "default";
        }
      }

    })
  }
  /* logout function removal of localStorage seller data */
  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
}
