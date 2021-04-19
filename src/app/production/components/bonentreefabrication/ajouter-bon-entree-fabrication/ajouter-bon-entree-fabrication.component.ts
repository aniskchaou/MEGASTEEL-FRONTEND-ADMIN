import { OfService } from '../../../services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BonfabricationService } from 'src/app/production/services/bonfabrication.service';

@Component({
  selector: 'app-ajouter-bon-entree-fabrication',
  templateUrl: './ajouter-bon-entree-fabrication.component.html',
  styleUrls: ['./ajouter-bon-entree-fabrication.component.css']
})
export class AjouterBonEntreeFabricationComponent implements OnInit {


  bonentreefabricationForm: FormGroup;
  constructor(private bonentreefabricationService: BonfabricationService) { this.bonentreefabricationForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {

    return new FormGroup({
      nombreArticle: new FormControl(''),
      quantite: new FormControl(),
      duree: new FormControl(),
      date: new FormControl(''),
      unite: new FormControl(''),
      qterestante: new FormControl()

    })
  }

  onSubmit() {
    console.log(this.bonentreefabricationForm.value)
    this.bonentreefabricationService.creer(this.bonentreefabricationForm.value);
  }

}
