import { OfService } from '../../../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-panne',
  templateUrl: './ajouter-panne.component.html',
  styleUrls: ['./ajouter-panne.component.css']
})
export class AjouterPanneComponent implements OnInit {



  panneForm: FormGroup;
  constructor(private ofService: OfService) { this.panneForm = this.createFormGroup(); }

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
    console.log(this.panneForm.value)
    this.ofService.creer(this.panneForm.value);
  }

}
