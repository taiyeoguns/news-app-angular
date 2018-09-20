import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Source } from "../_models/news/Source";
import { NewsItem } from "../_models/news/NewsItem";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  sources(): Observable<Source> {
    return this.http
      .get<Source>(
        "https://newsapi.org/v2/sources?language=en&apiKey=" +
          environment.news_api_key
      )
      .pipe(map((res: any) => res.sources));
  }

  headlines(source: string): Observable<NewsItem> {
    return this.http
      .get<NewsItem>(
        "https://newsapi.org/v2/top-headlines?sources=" +
          source +
          "&apiKey=" +
          environment.news_api_key
      )
      .pipe(map((res: any) => res.articles));
  }
}
