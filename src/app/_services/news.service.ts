import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  sources()
  {
  	return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + environment.news_api_key)
  }

  headlines(source)
  {
  	return this.http.get('https://newsapi.org/v2/top-headlines?sources='+ source +'&apiKey=' + environment.news_api_key)
  }

}
