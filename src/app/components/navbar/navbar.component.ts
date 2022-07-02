import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: ServiceService) {
    service.carga(['/navbar/navbar']);
   }

  ngOnInit(): void {
  }

  contactTo(){
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  homeTo(){
    document.getElementById('navbar')?.scrollIntoView({behavior: 'smooth', block: 'start'});

  }


  beerTo(){
    document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  galleryTo(){
    document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  footerTo(){
    document.getElementById('footer')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
