
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FamilleService } from 'src/app/production/services/famille.service';

@Component({
  selector: 'app-ajouter-famille',
  templateUrl: './ajouter-famille.component.html',
  styleUrls: ['./ajouter-famille.component.css']
})
export class AjouterFamilleComponent implements OnInit {


  familleForm: FormGroup;
  submitted: boolean = false;
  constructor(private familleService: FamilleService) { this.familleForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {



    return new FormGroup({
      nomFamille: new FormControl(''),
      articleEntrant: new FormControl(),
      articleSortant: new FormControl(),
      nombreArticle: new FormControl(''),
      nombreMachine: new FormControl('')
    })
  }

  get f() { return this.familleForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.familleForm.invalid) {
      return;
    }
    console.log(this.familleForm.value)
    this.familleService.creer(this.familleForm.value);
  }

}
