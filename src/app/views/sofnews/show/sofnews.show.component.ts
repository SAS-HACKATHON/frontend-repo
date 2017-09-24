import { ArticleService } from './../../../services/api/article.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: 'sofnews.show.component.html',
  providers: [ArticleService]
})

export class SofnewsShowComponent {


  articleID: number;
  private sub: any;
  article: any;

  articletitle = '';

  constructor(private router: Router,private route: ActivatedRoute,
    private articleService: ArticleService) {
    this.sub = this.route.params.subscribe(params => {console.log(params)
      this.articleID = params['id'];

      this.article = this.getArticleById(this.articleID);

    });

  }

  getArticleById(id: any) { 
    this.articleService.getArticleById(id).subscribe((obj) => {
      console.log(obj);
      this.article = obj;
    })
  }
}

