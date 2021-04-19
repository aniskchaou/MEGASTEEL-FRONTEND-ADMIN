
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {



  articleForm: FormGroup;
  constructor(private articleService: ArticleService) { this.articleForm = this.createFormGroup(); }

  ngOnInit() {

  }

  createFormGroup() {
    return new FormGroup({
      code: new FormControl(''),
      unite: new FormControl(),
      hauteur: new FormControl(),
      largeur: new FormControl(''),
      dimension: new FormControl(''),
      poids: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.articleForm.value)
    this.articleService.creer(this.articleForm.value);
  }

}
