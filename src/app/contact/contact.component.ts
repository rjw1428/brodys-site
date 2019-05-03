import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  header=["Hours","Contact Us"]
  sideTitle="CONTACT"
  phoneNum: string="(619) 303-5231"
  fbLink: string="@BrodysBurgersBeer"
  twitLink: string="@BrodysBurgers"
  igLink: string="@BrodysBurgersandBeer"
  tile: string[]=[
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Ftile1.jpg?alt=media&token=e71d4bb8-7386-459e-bd35-76d9d58b077e",
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Ftile2.jpg?alt=media&token=27fb4a67-05af-40a2-99d9-afe8d9dcbf2f",
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Ftile3.jpg?alt=media&token=b1f2748f-7e95-48b9-b74e-555499267dc8",
    "https://firebasestorage.googleapis.com/v0/b/brodys-192703.appspot.com/o/site-images%2Ftile4.jpg?alt=media&token=6adece3f-41db-450b-ab78-d4c308b4fa2c"
  ]
  constructor() { }

  ngOnInit() {
  }

}
