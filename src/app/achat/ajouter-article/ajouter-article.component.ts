import { OfService } from './../../production/services/of.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {

  

 articleForm:FormGroup;
 constructor(private ofService:OfService) {this.articleForm=this.createFormGroup(); }

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
   console.log(this.articleForm.value)
   this.ofService.creer(this.articleForm.value);
 }

}
