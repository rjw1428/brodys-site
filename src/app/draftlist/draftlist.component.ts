import { Component, OnInit } from '@angular/core';
import { Beer } from './beer/beer';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/internal/Observable';
import { map, subscribeOn } from 'rxjs/operators/'
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-draftlist',
  templateUrl: './draftlist.component.html',
  styleUrls: ['./draftlist.component.css']
})
export class DraftlistComponent implements OnInit {
  pageTitle = "Live Draft List"
  sideTitle = "DRAFT LIST"
  draftList: Beer[] = []
  limit = 9;
  max: number;
  sub: Subscription
  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.sub = this.db.list('draftList').snapshotChanges()
      .subscribe(vals => {
        this.draftList = []
        this.max = vals.length
        vals.forEach(element => {
          let x = element.payload.toJSON() as Beer
          x['id'] = element.key
          if (this.draftList.length < this.limit)
            this.draftList.push(x)
        });
      })
  }
  showMore() {
    this.limit += 6;
    this.ngOnInit()
  }

  showLess() {
    this.limit -= 6;
    this.ngOnInit()
  }
}
