import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/* for condition and can be use in html */
  menuType:String = 'default';

  /* intantiate router module */
  constructor(private route:Router) { }

  ngOnInit(): void {
    /* getting the href path */
    this.route.events.subscribe((value:any) => {
      if(value.url){
        console.warn(value.url);
        /* if login value and contain seller in href*/
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          console.warn("This is seller area");
          this.menuType = "seller"
        } else {
          console.warn("Outside seller area");
          this.menuType = "default";
        }
      }

    })
  }

}
