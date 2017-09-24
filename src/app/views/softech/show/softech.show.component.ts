import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/api/article.service';


@Component({
  templateUrl: 'softech.show.component.html',
  providers: [ArticleService]
})

export class SoftechShowComponent {


  constructor() { 
  }

}
