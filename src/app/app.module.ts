import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { TimerComponent } from './components/timer/timer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PhotosGalleryComponent } from './components/photos-gallery/photos-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimerComponent,
    CarouselComponent,
    GalleryComponent,
    PhotosGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
