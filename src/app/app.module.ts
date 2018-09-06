import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
