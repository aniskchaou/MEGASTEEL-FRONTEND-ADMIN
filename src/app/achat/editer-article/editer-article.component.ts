import { ArticleService } from './../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { OfService } from './../../production/services/of.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editer-article',
  templateUrl: './editer-article.component.html',
  styleUrls: ['./editer-article.component.css']
})
export class EditerArticleComponent implements OnInit {

 
model
constructor(private route:ActivatedRoute,private articleService:ArticleService) { }

ngOnInit() {
 this.articleService.editer(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
  this.model=data;
  console.log(this.model);
 })
 
}

onSubmit() { 
  this.articleService.creer(this.model);
  console.log(this.model);
  }

}
