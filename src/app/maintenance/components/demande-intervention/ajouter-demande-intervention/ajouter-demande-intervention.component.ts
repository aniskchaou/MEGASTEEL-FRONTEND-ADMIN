import { OfService } from '../../../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-demande-intervention',
  templateUrl: './ajouter-demande-intervention.component.html',
  styleUrls: ['./ajouter-demande-intervention.component.css']
})
export class AjouterDemandeInterventionComponent implements OnInit {



  interventionForm: FormGroup;
  constructor(private ofService: OfService) { this.interventionForm = this.createFormGroup(); }

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
    console.log(this.interventionForm.value)
    this.ofService.creer(this.interventionForm.value);
  }

}
