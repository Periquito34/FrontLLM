import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de importar esto

import { AppComponent } from './app.component';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionGeneratorComponent,
    SideNavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule  // Asegúrate de incluir esto en los imports
  ],
  providers: [],
  bootstrap: [AppComponent,
    QuestionGeneratorComponent,
    SideNavComponent,
    BodyComponent
  ]
})
export class AppModule { }
