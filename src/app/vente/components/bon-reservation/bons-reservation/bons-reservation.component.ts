
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';
import { BonReservationService } from 'src/app/vente/services/bon-reservation.service';

@Component({
  selector: 'app-bons-reservation',
  templateUrl: './bons-reservation.component.html',
  styleUrls: ['./bons-reservation.component.css']
})
export class BonsReservationComponent extends URLLoader implements OnInit {
  reservations
  loading: boolean = true;
  constructor(private router: Router, private bonReservationService: BonReservationService) { super() }

  ngOnInit() {
    this.bonReservationService.tous().subscribe(data => {
      this.reservations = data;
      this.loading = false;
      super.loadScripts()
    })
  }


  redirectAjouter() {
    this.router.navigateByUrl("ajouter-bon-reservation");
  }

  redirectEditer() {

  }
}
