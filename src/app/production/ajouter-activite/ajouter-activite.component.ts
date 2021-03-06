import { OfService } from './../services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-activite',
  templateUrl: './ajouter-activite.component.html',
  styleUrls: ['./ajouter-activite.component.css']
})
export class AjouterActiviteComponent implements OnInit {

  
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
