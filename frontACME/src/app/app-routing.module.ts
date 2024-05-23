import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/question-generator', pathMatch: 'full' },
  { path: 'question-generator', component: QuestionGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
