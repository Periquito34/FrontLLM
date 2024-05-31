import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';
import { BodyComponent } from './body/body.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  { path: 'question-generator', component: QuestionGeneratorComponent },
  { path: 'body', component: BodyComponent , 
    children:[
        {path: 'question-generator', component: QuestionGeneratorComponent},
        { path: '', redirectTo: 'question-generator', pathMatch: 'full' },
        {path: 'file-upload', component: FileUploadComponent},
    ]  
  },
  { path: '', redirectTo: 'body', pathMatch: 'full' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
