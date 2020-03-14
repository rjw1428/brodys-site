import { Component, OnInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currencyPipe = new CurrencyPipe('en-US')
  @Input() item: {name: string, description: string, img: any, price: any, priceString: string}
  constructor() { }

  ngOnInit() {
    this.item.priceString=""
    if (this.item.price) {
      Object.keys(this.item.price).forEach(key=>{
        if (Object.keys(this.item.price).length>1) {
          this.item.priceString += `${key} ${this.currencyPipe.transform(this.item.price[key])} `
        }
        else  this.item.priceString += `${this.currencyPipe.transform(this.item.price[key])} `
      })
    }
  }

}
