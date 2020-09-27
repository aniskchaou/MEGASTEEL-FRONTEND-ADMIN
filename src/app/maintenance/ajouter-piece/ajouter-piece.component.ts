import { OfService } from './../../production/services/of.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-piece',
  templateUrl: './ajouter-piece.component.html',
  styleUrls: ['./ajouter-piece.component.css']
})
export class AjouterPieceComponent implements OnInit {

  

 pieceForm:FormGroup;
 constructor(private ofService:OfService) {this.pieceForm=this.createFormGroup(); }

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
   console.log(this.pieceForm.value)
   this.ofService.creer(this.pieceForm.value);
 }

}
