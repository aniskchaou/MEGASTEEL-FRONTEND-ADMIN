import { OfService } from './../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-machine',
  templateUrl: './ajouter-machine.component.html',
  styleUrls: ['./ajouter-machine.component.css']
})
export class AjouterMachineComponent implements OnInit {

  

 machineForm:FormGroup;
 constructor(private ofService:OfService) {this.machineForm=this.createFormGroup(); }

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
   console.log(this.machineForm.value)
   this.ofService.creer(this.machineForm.value);
 }

}
