import { API_ARTICLE_ADD } from './../../../constants/app.constants';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/api/article.service';
import { AppConfig } from 'app/app-config';


@Component({
  templateUrl: 'sofnews.add.component.html',
  providers: [ArticleService]
})

export class SofnewsAddComponent {

  articlesByType: any;
  model: any = {};

  constructor(private articleService: ArticleService, private http: Http, private appConfig: AppConfig) {
    console.log('hello rfom componnst');
  }

   public saveArticle() {
    console.log(this.model.titleinput);
    console.log(this.model.catselect);

    // this.http.post(API_ARTICLE_ADD)

    let id =  Math.floor(Math.random() * (100 - 1 + 1)) + 1000;

    this.http.post(this.appConfig.baseApiPath + `${API_ARTICLE_ADD}`, {id: id, title: 'sfgsfg', type : 'ACTU'}).subscribe(res => {});
    // let headers = new Headers({ 'Content-Type': 'application/json' });let options = new RequestOptions({ headers: headers });return this.http.post(this.url, book, options).toPromise().then(this.extractData).catch(this.handleErrorPromise);

   }

}
