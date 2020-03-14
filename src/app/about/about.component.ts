import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageTitle: string="About Us"
  sideTitle: string="ABOUT"
  year: number = 19
  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear() - 2001
  }
}
