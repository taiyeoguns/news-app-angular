import { Component, OnInit } from '@angular/core';
import { NewsService } from '../_services/news.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'news-item-container',
  inputs: ['source'],
  templateUrl: './newsitemcontainer.component.html',
  styleUrls: ['./newsitemcontainer.component.css']
})
export class NewsitemcontainerComponent implements OnInit {

  newsitems$;
  source;

  constructor(private news: NewsService) { }

  ngOnInit() {

  	this.news.headlines(this.source.id).subscribe(

  		data => {
  			this.newsitems$ = _.sampleSize(data.articles, 5)
  		}

  		);

  }

}
