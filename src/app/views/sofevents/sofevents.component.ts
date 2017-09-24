import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/api/article.service';
@Component({
  templateUrl: 'sofevents.component.html',
  providers: [ArticleService]
})
export class SofeventsComponent {

  articlesByType: any;
  constructor(private articleService: ArticleService) { 
    this. getArticlesByType("EVENT");
  }

   getArticlesByType(type: string) {
     this.articleService.getArticleByType(type).subscribe((obj) => {
       this.articlesByType = obj;
     })
   }

}
