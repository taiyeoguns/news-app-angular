import { Component, OnInit } from "@angular/core";
import { NewsService } from "../_services/news.service";

import { Source } from "../_models/news/Source";
import { NewsItem } from "../_models/news/NewsItem";

import * as _ from "lodash";

@Component({
  selector: "news-item-container",
  inputs: ["source"],
  templateUrl: "./newsitemcontainer.component.html",
  styleUrls: ["./newsitemcontainer.component.css"]
})
export class NewsitemcontainerComponent implements OnInit {
  newsitems: NewsItem[];
  source: Source;

  constructor(private news: NewsService) {}

  ngOnInit() {
    this.news.headlines(this.source.id).subscribe(data => {
      this.newsitems = _.sampleSize(data, 5);
    });
  }
}
