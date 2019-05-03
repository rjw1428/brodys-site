import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pageTitle = "Food"
  sideTitle = "MENU"
  categoryList = []
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.service.getCategories().subscribe(vals => {
      this.categoryList = vals
    })
  }

}
