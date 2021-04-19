import { ArticleService } from '../../../services/article.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/config/urls/URLLoader';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent extends URLLoader implements OnInit {

  articles;
  loading: boolean = true;
  constructor(private router: Router, private articleService: ArticleService) { super() }

  ngOnInit() {
    this.articleService.tous().subscribe(data => {
      this.articles = data;
      this.loading = false;
      super.loadScripts()
    })
  }
  redirectAjouter() {
    this.router.navigateByUrl("ajouter-article");
  }

  redirectEditer() {

  }

}
