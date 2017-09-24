import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/api/article.service';


@Component({
  templateUrl: 'sofnews.component.html',
  providers: [ArticleService]
})

export class SofnewsComponent {

  articlesByType: any;
  constructor(private articleService: ArticleService) { 
    console.log('hello rfom componnst'); 
    this. getArticlesByType("ACTU");
  }

   getArticlesByType(type: string) {
     console.log("from component "+type);
     
     this.articleService.getArticleByType(type).subscribe((obj) => {
       console.log(obj);
       this.articlesByType = obj;
     })
   }

}
