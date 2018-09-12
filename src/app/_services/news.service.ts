import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

import { Observable } from 'rxjs'

import { SourceList } from '../_models/news/SourceList'
import { Headline } from '../_models/news/Headline'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  sources(): Observable<SourceList>
  {
  	return this.http.get<SourceList>('https://newsapi.org/v2/sources?language=en&apiKey=' + environment.news_api_key)
  }

  headlines(source: string): Observable<Headline>
  {
  	return this.http.get<Headline>('https://newsapi.org/v2/top-headlines?sources='+ source +'&apiKey=' + environment.news_api_key)
  }

}
