import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule,
    RouterModule,
    

  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    ContactComponent
  ]
})
export class ComponentsModule { }
