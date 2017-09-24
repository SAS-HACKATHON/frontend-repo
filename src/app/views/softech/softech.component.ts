import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/api/article.service';

@Component({
  templateUrl: 'softech.component.html'
})
export class SoftechComponent {



  articlesByType: any;
  constructor(private articleService: ArticleService) { 
    this. getArticlesByType("ACTU_TECHNO");
  }

   getArticlesByType(type: string) {
     
     this.articleService.getArticleByType(type).subscribe((obj) => {
       this.articlesByType = obj;
     })
   }

}
