import { OfService } from './../services/of.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter-of',
  templateUrl: './ajouter-of.component.html',
  styleUrls: ['./ajouter-of.component.css']
})
export class AjouterOfComponent implements OnInit {

  ofForm:FormGroup;
  constructor(private ofService:OfService) {this.ofForm=this.createFormGroup(); }

  ngOnInit() {
    
  }

  createFormGroup() {
    return new FormGroup({
      codeOF: new FormControl(''),
      articleEntrant : new FormControl(),
      articleSortant : new FormControl(),
      quantiteRealise : new FormControl(''),
      quantiteRestant : new FormControl(''),
      codeMachine : new FormControl(),
      etat : new FormControl()
    })
  }

  onSubmit(){
    console.log(this.ofForm.value)
    this.ofService.creer(this.ofForm.value);
  }
}
