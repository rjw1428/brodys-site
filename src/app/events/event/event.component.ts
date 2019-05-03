import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() title: string;
  @Input() img: string;
  @Input() index: number;
  @Output() onClick = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }
  click() {
    this.onClick.emit(this.index);
  }

}
