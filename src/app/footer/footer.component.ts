import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linklocation() {
    window.open('https://www.google.com/maps/place/Bako+Motors/@36.7276994,10.2397664,15z/data=!4m5!3m4!1s0x0:0x7b79dbe982fb45f0!8m2!3d36.7276994!4d10.2397664');
    }

}
