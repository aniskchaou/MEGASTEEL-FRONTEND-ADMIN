import { BonReservationService } from '../../../services/bon-reservation.service';
import { OfService } from '../../../../production/services/of.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-bon-reservation',
  templateUrl: './editer-bon-reservation.component.html',
  styleUrls: ['./editer-bon-reservation.component.css']
})
export class EditerBonReservationComponent implements OnInit {


  model
  constructor(private route: ActivatedRoute, private bonReservationService: BonReservationService) { }

  ngOnInit() {
    this.bonReservationService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.model = data;
      console.log(this.model);
    })

  }

  onSubmit() {
    this.bonReservationService.creer(this.model);
    console.log(this.model);
  }

}
