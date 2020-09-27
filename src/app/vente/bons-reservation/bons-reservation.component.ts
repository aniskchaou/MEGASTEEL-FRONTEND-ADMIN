import { BonReservationService } from './../services/bon-reservation.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bons-reservation',
  templateUrl: './bons-reservation.component.html',
  styleUrls: ['./bons-reservation.component.css']
})
export class BonsReservationComponent implements OnInit {
  reservations
  constructor(private router:Router,private bonReservationService:BonReservationService) { }

  ngOnInit() {
    this.bonReservationService.tous().subscribe(data=>{
      this.reservations=data;
    })
  }


  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-bon-reservation");
  }

  redirectEditer()
  {

  }
}
