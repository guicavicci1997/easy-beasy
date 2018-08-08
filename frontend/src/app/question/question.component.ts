import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions: any = [];
  constructor(private qs: QuestionService) { }

  ngOnInit() {
    setTimeout(() => {
      this.configureSizeOfOptions();
    }, 2000);
    this.getAllQuestions().subscribe(data => this.questions = data)
    console.log(this.questions)
  }

  getAllQuestions() {
    return this.qs.getQuestions();
  }

  configureSizeOfOptions() {
    let questionImg = getComputedStyle(document.getElementById('image-question'));
    let widthByQuestion = (Number.parseInt(questionImg.width.replace(/px/g, '')) -12) / 4;
    let optQuestion = Array.from(document.querySelectorAll('.question-option'));
    optQuestion.forEach(elm => elm.setAttribute("style", `width: ${widthByQuestion}px`));
  }
}
