import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/api/article.service';


@Component({
  templateUrl: 'sofhello.add.component.html',
  providers: [ArticleService]
})

export class SofhelloAddComponent {

  articlesByType: any;
  constructor(private articleService: ArticleService) { 
    console.log('hello rfom componnst'); 
  }

  public article;
   public saveArticle() { 
    /* this.articleService.save(article).subscribe((obj) => {
       console.log(obj);
       this.articlesByType = obj;
     })*/
   }

}
