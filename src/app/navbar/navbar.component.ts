import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() onScroll = new EventEmitter<string>()
  barName: string = "Brody's Burgers & Beer"
  barShort: string = "Brody's Burgers"
  constructor() { }

  ngOnInit() {
  }

  scrollToPosition(elementName) {
    this.onScroll.emit(elementName)
  }

}
