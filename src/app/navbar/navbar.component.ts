import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  barName: string = "Brody's Burgers & Beer"
  barShort: string = "Brody's Burgers"
  constructor() { }

  ngOnInit() {
  }

}
