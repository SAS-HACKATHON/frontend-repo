import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/api/article.service';


@Component({
  templateUrl: 'sofnews.show.component.html',
  providers: [ArticleService]
})

export class SofnewsShowComponent {


  constructor() { 
  }

}
