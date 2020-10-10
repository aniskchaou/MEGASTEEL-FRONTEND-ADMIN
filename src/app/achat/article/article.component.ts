import { ArticleService } from './../services/article.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles;
  loading: boolean=true;
  constructor(private router:Router,private articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.tous().subscribe(data=>{
      this.articles=data;
      this.loading=false;
    })
  }
  redirectAjouter()
  {
    this.router.navigateByUrl("ajouter-article");
  }

  redirectEditer()
  {

  }

}
