import { Component } from '@angular/core';
//import { NewsitemcontainerComponent } from './newsitemcontainer/newsitemcontainer.component';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app-angular - ' + environment.news_api_key;
}
