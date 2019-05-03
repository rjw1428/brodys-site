import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  delay: number = 5
  imageList = [
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Ftaps.jpg?alt=media&token=7d2d2fcf-04ac-43f5-80fe-48e182ad72e6",
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Fbrodys01.jpg?alt=media&token=d437eed8-6126-4a93-a890-bc868b25c4ac",
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Fburger.jpg?alt=media&token=1cf4bd00-f8b1-48a3-ac3d-0be5d05e4edc"
  ]
  constructor(private service: DataServiceService) { }

  ngOnInit() {
    this.service.getCarouselImgs().subscribe(imgs=>this.imageList=imgs)
    $('#carousel').carousel({
      interval: 1000 * this.delay
    })

    // $('#carousel').on('slide.bs.carousel', function () {
    //   console.log("SLIDE")
    // });
  }
  // onSlide($event) {
  //   console.log("SLIDE")
  // }
}
