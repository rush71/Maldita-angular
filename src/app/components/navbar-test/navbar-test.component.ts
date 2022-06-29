import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './navbar-test.component.html',
  styleUrls: ['./navbar-test.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ServiceService) { 
    // service.carga(['/navbar/navbar']);
  }

  ngOnInit(): void {
  }

}
