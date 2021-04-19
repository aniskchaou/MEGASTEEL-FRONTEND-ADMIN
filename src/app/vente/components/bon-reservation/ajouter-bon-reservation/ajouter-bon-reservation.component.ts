
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BonReservationService } from 'src/app/vente/services/bon-reservation.service';

@Component({
  selector: 'app-ajouter-bon-reservation',
  templateUrl: './ajouter-bon-reservation.component.html',
  styleUrls: ['./ajouter-bon-reservation.component.css']
})
export class AjouterBonReservationComponent implements OnInit {



  bonReservationForm: FormGroup;
  constructor(private bonReservationService: BonReservationService) { this.bonReservationForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      codeOF: new FormControl(''),
      articleEntrant: new FormControl(),
      articleSortant: new FormControl(),
      quantiteRealise: new FormControl(''),
      quantiteRestant: new FormControl(''),
      codeMachine: new FormControl(),
      etat: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.bonReservationForm.value)
    this.bonReservationService.creer(this.bonReservationForm.value);
  }

}
