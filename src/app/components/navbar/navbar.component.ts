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

}
