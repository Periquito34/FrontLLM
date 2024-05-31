import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de importar esto

import { AppComponent } from './app.component';
import { QuestionGeneratorComponent } from './question-generator/question-generator.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionGeneratorComponent,
    FileUploadComponent,
    SideNavComponent,
    BodyComponent,
    UploadComponent
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
    BodyComponent,
    UploadComponent
  ]
})
export class AppModule { }
