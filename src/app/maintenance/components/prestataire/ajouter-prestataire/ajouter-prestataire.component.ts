import { OfService } from '../../../../production/services/of.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-prestataire',
  templateUrl: './ajouter-prestataire.component.html',
  styleUrls: ['./ajouter-prestataire.component.css']
})
export class AjouterPrestataireComponent implements OnInit {



  prestataireForm: FormGroup;
  constructor(private ofService: OfService) { this.prestataireForm = this.createFormGroup(); }

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
    console.log(this.prestataireForm.value)
    this.ofService.creer(this.prestataireForm.value);
  }

}
