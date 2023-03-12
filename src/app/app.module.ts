import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreValuesComponent } from './components/core-values/core-values.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { IvyCarouselModule } from 'carousel-angular';
import { ServicesComponent } from './components/services/services.component';
import { MatCardModule } from '@angular/material/card';
import { StoreComponent } from './components/store/store.component';
import { PlatformModule } from '@angular/cdk/platform';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    FooterComponent,
    CoreValuesComponent,
    MissionVisionComponent,
    ServicesComponent,
    StoreComponent,
    ContactModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatIconModule,
    IvyCarouselModule,
    MatCardModule,
    GoogleMapsModule,
    PlatformModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
