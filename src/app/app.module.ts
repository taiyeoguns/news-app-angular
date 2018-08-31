import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { NewsitemcontainerComponent } from './newsitemcontainer/newsitemcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsitemComponent,
    NewsitemcontainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
