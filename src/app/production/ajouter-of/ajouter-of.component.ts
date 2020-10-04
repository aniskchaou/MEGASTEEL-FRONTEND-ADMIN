import { OfService } from './../services/of.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-of',
  templateUrl: './ajouter-of.component.html',
  styleUrls: ['./ajouter-of.component.css']
})
export class AjouterOfComponent implements OnInit {

  ofForm:FormGroup;
  submitted = false;
  constructor(private ofService:OfService) {this.ofForm=this.createFormGroup(); }

  ngOnInit() {
    
  }

  createFormGroup() {
    return new FormGroup({
      codeOF: new FormControl('',Validators.required),
      articleEntrant : new FormControl(),
      articleSortant : new FormControl(),
      quantiteRealise : new FormControl('',Validators.required),
      quantiteRestant : new FormControl('',Validators.required),
      codeMachine : new FormControl(),
      etat : new FormControl()
    })
  }

  get f() { return this.ofForm.controls; }
  
  onSubmit(){
    this.submitted = true;
    if (this.ofForm.invalid) {
      return;
  }
    console.log(this.ofForm.value)
    this.ofService.creer(this.ofForm.value);
  }
}
