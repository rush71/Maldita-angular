import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-navbar-test',
  templateUrl: './navbar-test.component.html',
  styleUrls: ['./navbar-test.component.css']
})
export class NavbarTestComponent implements OnInit {

  constructor(private service: ServiceService) {
    service.carga(['/navbar/navbar']);
   }

  ngOnInit(): void {
  }


  testeoBravo(){

    this.service.carga(['navbar/navbar']);
  }
}



