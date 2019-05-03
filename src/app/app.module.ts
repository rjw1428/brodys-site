import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './menu/item/item.component';
import { CategoryComponent } from './menu/category/category.component';
import { DraftlistComponent } from './draftlist/draftlist.component';
import { BeerComponent } from './draftlist/beer/beer.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { ContactComponent } from './contact/contact.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageSideComponent } from './page-side/page-side.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MapComponent } from './map/map.component'
import { RouterModule } from '@angular/router';
import { DataServiceService } from './data-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    AboutComponent,
    MenuComponent,
    ItemComponent,
    CategoryComponent,
    DraftlistComponent,
    BeerComponent,
    EventsComponent,
    EventComponent,
    ContactComponent,
    PageTitleComponent,
    PageSideComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
