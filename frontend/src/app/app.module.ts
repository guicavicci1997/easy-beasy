import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './services/question.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderQuestionComponent } from './header-question/header-question.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderQuestionComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
