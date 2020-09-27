import { OfService } from './../../production/services/of.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-maintenance-preventive',
  templateUrl: './ajouter-maintenance-preventive.component.html',
  styleUrls: ['./ajouter-maintenance-preventive.component.css']
})
export class AjouterMaintenancePreventiveComponent implements OnInit {

  

 maintenanceForm:FormGroup;
 constructor(private ofService:OfService) {this.maintenanceForm=this.createFormGroup(); }

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
   console.log(this.maintenanceForm.value)
   this.ofService.creer(this.maintenanceForm.value);
 }

}
