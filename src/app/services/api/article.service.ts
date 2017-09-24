import { Injectable } from '@angular/core';
import { API_ARTICLES_BY_TYPE } from '../../constants/app.constants';
import { ApiRequestService } from './api-request.service';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';

@Injectable()
export class ArticleService {

  constructor(private apiRequestService: ApiRequestService) {
  }

  public getArticleByType(type: string): any {
    const re = "{type}";
    let url = API_ARTICLES_BY_TYPE;
    url = url.replace(re,type);    
   return this.apiRequestService.get(url);
  }


  public getArticleById(id: number): any {
    const re = "{id}";
    let url = API_ARTICLES_BY_TYPE;
    url = url.replace(re,String(id));    
   return this.apiRequestService.get(url);
  }



}   
