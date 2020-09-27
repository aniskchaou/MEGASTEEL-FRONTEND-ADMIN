import { OfService } from './../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-bon-entree-achat',
  templateUrl: './ajouter-bon-entree-achat.component.html',
  styleUrls: ['./ajouter-bon-entree-achat.component.css']
})
export class AjouterBonEntreeAchatComponent implements OnInit {

  

 bonAchatForm:FormGroup;
 constructor(private ofService:OfService) {this.bonAchatForm=this.createFormGroup(); }

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
   console.log(this.bonAchatForm.value)
   this.ofService.creer(this.bonAchatForm.value);
 }

}
