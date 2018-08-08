import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  url = 'http://localhost:4000/questions';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(`${this.url}`);
  }

  getQuestionsById(id) {
    return this.http.get(`${this.url}/questions/${id}`);
  }

  //impl question add..
  addQuestion(question) {
    const questionObject = {}; 
    return this.http.post(`${this.url}/questions/add`, questionObject);
  }

}
