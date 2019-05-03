import { Component, OnInit, Input } from '@angular/core';
import { Beer } from './beer';
import { AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  @Input() beer: Beer;
  icon: string;
  constructor(private storage: AngularFireStorage) { 
  }

  ngOnInit() {
    this.getImage(this.beer.imgUrl)
  }

  getImage(name: string) {
    const ref = this.storage.ref(environment.itemIconRootAddress + name);
    ref.getDownloadURL()
      .toPromise()
      .then(value => {
        this.icon = value;
      })
      .catch(e => {
        this.icon = '../../../assets/404icon.png'
        //this.iconOff.emit({ company: this.beer.company, filename: name })
      })
  }
}
