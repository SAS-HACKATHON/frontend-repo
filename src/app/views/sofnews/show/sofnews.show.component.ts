import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/api/article.service';


@Component({
  templateUrl: 'sofnews.show.component.html',
  providers: [ArticleService]
})

export class SofnewsShowComponent {


  articleID: number;
  private sub: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.articleID = +params['id'];
    });

    console.log(this.articleID + 'hfdhrfthjsfjn,dsfjyfdjfsigtdsryq_gde_u');

  }




}
