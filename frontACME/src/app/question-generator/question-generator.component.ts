import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question-generator',
  templateUrl: './question-generator.component.html',
  styleUrls: ['./question-generator.component.css']
})
export class QuestionGeneratorComponent {
  context: string = '';
  questions: string[] = [];
  error: string = '';
  loading: boolean = false;

  constructor(private apiService: ApiService) { }

  generateQuestions(): void {
    if (!this.context.trim()) {
      this.error = 'El Contexto es Requerido';
      return;
    }

    this.loading = true;
    this.error = '';
    this.questions = [];

    this.apiService.generateQuestions(this.context).subscribe(
      response => {
        // Eliminar asteriscos del texto de las preguntas generadas
        this.questions = response.questions.map((question: string) => question.replace(/\*/g, ''));
        this.loading = false;
      },
      error => {
        this.error = 'Error generating questions: ' + error.message;
        this.loading = false;
      }
    );
  }
}
