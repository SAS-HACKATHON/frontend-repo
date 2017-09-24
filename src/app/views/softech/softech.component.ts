import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/api/article.service';
import { UserInfoService, LoginInfoInStorage } from '../../services/user-info.service';

@Component({
  templateUrl: 'softech.component.html',
  providers: [ArticleService]
})
export class SoftechComponent  {

  articlesByType: any;
  userInfo: any;
  hasAcces: boolean = false;

  constructor(private articleService: ArticleService, private userInfoService: UserInfoService) {
    console.log('hello rfom componnst');
    this.getArticlesByType("ACTU_TECHNO");
    this.userInfo = this.userInfoService.getUserInfo();


  }

  public generate(index) {
    let classcards = ['bg-primary', 'bg-danger', 'bg-warning', 'bg-info','bg-success'];
    let i = index%4;
    return  classcards[i];
  }

  getArticlesByType(type: string) {
    console.log("from component " + type);

    this.articleService.getArticleByType(type).subscribe((obj) => {
      console.log(obj);
      this.articlesByType = obj;
    })
  }

  hasAccess(article: any): boolean {
    console.log(this.userInfo.userId);
    console.log(article.user.id);
    
    if (this.userInfo.role == "ADMIN" || this.userInfo.userId == article.user.id) {
      return true;
    }
    return false;
  }

}
