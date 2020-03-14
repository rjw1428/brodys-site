import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('home', {static: false}) homeEl: ElementRef
  @ViewChild('menu', {static: false}) menuEl: ElementRef
  @ViewChild('drafts', {static: false}) draftsEl: ElementRef
  @ViewChild('events', {static: false}) eventsEl: ElementRef
  @ViewChild('contact', {static: false}) contactEl: ElementRef

  triggerScroll(elementName) {
    let element = this.homeEl.nativeElement
    if (elementName == 'menu')
      element = this.menuEl.nativeElement
    else if (elementName == 'drafts')
      element = this.draftsEl.nativeElement
    else if (elementName == 'events')
      element = this.eventsEl.nativeElement
    else if (elementName == 'contact')
      element = this.contactEl.nativeElement
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}


