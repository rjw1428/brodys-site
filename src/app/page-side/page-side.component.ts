import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-side',
  templateUrl: './page-side.component.html',
  styleUrls: ['./page-side.component.css']
})
export class PageSideComponent implements OnInit {
  @Input() title: string
  @Input() shift: any
  @Input('darkMode') isDark: boolean
  constructor() { }

  ngOnInit() {
  }

}
