import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-item',
  inputs: ['newsitem'],
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {

  newsitem;

  constructor() { }

  ngOnInit() {
  }

}
