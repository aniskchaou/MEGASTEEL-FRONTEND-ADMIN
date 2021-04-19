import { OfService } from '../../../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-operateur',
  templateUrl: './ajouter-operateur.component.html',
  styleUrls: ['./ajouter-operateur.component.css']
})
export class AjouterOperateurComponent implements OnInit {



  operateurForm: FormGroup;
  constructor(private ofService: OfService) { this.operateurForm = this.createFormGroup(); }

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
    console.log(this.operateurForm.value)
    this.ofService.creer(this.operateurForm.value);
  }

}
