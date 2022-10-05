import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

    linkfcb() {
     window.open('https://www.facebook.com/bakomotors/');
    }

    linklinkedin() {
      window.open('https://www.linkedin.com/company/bakomotors/mycompany/');
      }

    linkyoutube() {
      window.open('https://www.youtube.com/channel/UCLDzKccjrEImewtTZaPNipA');
      }
       
    linkinstagram() {
        window.open('https://www.instagram.com/bakomotors/?hl=fr%20bakomotors');
        }

   
    
    

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      margin: 0,
      navSpeed: 700,
      navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: false
      };

}
