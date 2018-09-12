import { Component } from '@angular/core';
import { NewsService } from './_services/news.service';
import { Observable } from 'rxjs';
import * as sampleSize from 'lodash/sampleSize'

import { Source } from './_models/news/Source'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODAY\'S NEWS';
  sources: Source[];

  constructor(private news: NewsService) { }

  ngOnInit() {

  	this.news.sources().subscribe(

  		data => {

  			this.sources = sampleSize(data.sources, 3)
  		}

  		);

  }
}
