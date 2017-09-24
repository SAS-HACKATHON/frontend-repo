import { Injectable } from '@angular/core';
import { API_ARTICLES_BY_TYPE } from '../../constants/app.constants';
import { ApiRequestService } from './api-request.service';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';

@Injectable()
export class ArticleService {

  constructor(private apiRequestService: ApiRequestService) {

  }

  public getArticleByType(type: string): any {
      console.log("from service "+type);
      
    const re = "{type}";
    let url = API_ARTICLES_BY_TYPE;
    url = url.replace(re,type);

    console.log(url);
    
   return this.apiRequestService.get(url);
  }
}   
