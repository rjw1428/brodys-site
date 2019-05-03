import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  pageTitle = "Upcoming Events"
  sideTitle = "EVENTS"
  eventTitle: string[] = ["LUPE'S SPECIAL", "HAPPY HOUR"]
  displayDescription: boolean = false;
  activeItem: number;
  img: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Fburger2.jpg?alt=media&token=a9f28608-adc9-4399-b896-4008f9c2b6e1',
    'https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Fflight.png?alt=media&token=6fc7b676-d2f8-41c0-bdb7-7019ac26ec0a']

  description: string[]=[
    'This is the special of the week',
    'Happy hour 4-6 pm every day, note some of our beers are not available during happy hour'
  ]
  constructor() { }

  ngOnInit() {
  }
  tileSelected($event) {
    if ($event == this.activeItem)
      this.displayDescription = !this.displayDescription
    else {
      this.displayDescription = true
      this.activeItem = $event
    }
  }
}
