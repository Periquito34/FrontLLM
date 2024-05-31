import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';
import { BodyComponent } from './body/body.component';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: 'question-generator', component: QuestionGeneratorComponent },
  { path: 'body', component: BodyComponent , 
    children:[
        {path: 'question-generator', component: QuestionGeneratorComponent},
        { path: '', redirectTo: 'question-generator', pathMatch: 'full' }
    ]  
  },
  { path: '', redirectTo: 'body', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
