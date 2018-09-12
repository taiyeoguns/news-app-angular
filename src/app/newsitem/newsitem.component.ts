import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../_models/news/NewsItem'


@Component({
  selector: 'news-item',
  inputs: ['newsitem'],
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {

  newsitem: NewsItem;

  constructor() { }

  ngOnInit() {
  }

}
