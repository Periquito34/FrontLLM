import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/question-generator', pathMatch: 'full' },
  { path: 'question-generator', component: QuestionGeneratorComponent },
  { path: 'upload', component: FileUploadComponent } // Nueva ruta para el componente FileUploadComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
