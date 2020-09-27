import { OfService } from './../../production/services/of.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  

 clientForm:FormGroup;
 constructor(private ofService:OfService) {this.clientForm=this.createFormGroup(); }

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
   console.log(this.clientForm.value)
   this.ofService.creer(this.clientForm.value);
 }

}
