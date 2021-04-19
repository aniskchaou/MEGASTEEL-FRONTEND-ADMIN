
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../../../services/activite.service';

@Component({
  selector: 'app-ajouter-activite',
  templateUrl: './ajouter-activite.component.html',
  styleUrls: ['./ajouter-activite.component.css']
})
export class AjouterActiviteComponent implements OnInit {


  activiteForm: FormGroup;
  constructor(private activiteService: ActiviteService) { this.activiteForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      nom: new FormControl(''),
      familleEntrant: new FormControl(),
      familleSortant: new FormControl(),
      nombreArticle: new FormControl(''),
      nombreMachine: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.activiteForm.value)
    this.activiteService.creer(this.activiteForm.value);
  }

}
