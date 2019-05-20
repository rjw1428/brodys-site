import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { validateConfig } from '@angular/router/src/config';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) { }

  getCarouselImgs() {
    return this.afs.collection('content').snapshotChanges().pipe(
      map(docs => {
        return docs.map((doc) => {
          let img = doc.payload.doc.data() as { fbUrl: string, carousel: boolean, displayName: string }
          if (img.carousel) {
            return img.fbUrl
          }
          return null
        })
      }),
      map(headerList => {
        let imgList = []
        headerList.forEach(header => {
          if (header != null)
            imgList.push(header)
        })
        return imgList
      })
    )
  }

  getCategories() {
    return this.db.list('categoryList').snapshotChanges().pipe(
      map(vals => {
        return vals.map(val => {
          let x = val.payload.toJSON()
          x['id'] = val.key
          return x
        })
      })
    )
  }

  getFood(key: string) {
    return this.db.list('menuList').valueChanges().pipe(
      map(vals => {
        return vals.filter((val: { category: string, order: number }) => {
          if (val.category == key)
            return true
        }).sort((valA: {order: number }, valB: {order: number })=>{
          return valA.order-valB.order;
        })
      })
    )
  }
}
