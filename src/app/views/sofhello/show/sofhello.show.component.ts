import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/api/article.service';


@Component({
  templateUrl: 'sofhello.show.component.html',
  providers: [ArticleService]
})

export class SofhelloShowComponent {


  constructor() { 
  }

}
