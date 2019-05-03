import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  phoneNum = "619.303.5231"
  address = "12930 Campo Rd Jamul, CA"
  fb = "https://www.facebook.com/pages/Brodys-Burgers-Beer/329168860444473"
  twit = "https://twitter.com/brodysbb12930"
  ig = "http://instagram.com/brodysburgersandbeer"
  map="https://www.google.com/maps/place/Brody's+Burgers+%26+Beer/@32.7286634,-116.9110995,17z/data=!3m1!4b1!4m5!3m4!1s0x80d95b7427429539:0xadf5aa7334345b70!8m2!3d32.7286589!4d-116.9089108"
  constructor() { }

  ngOnInit() {
  }
}
