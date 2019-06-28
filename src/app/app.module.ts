import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { WorkTodosComponent } from './work-todos/work-todos.component';
import { PersonalTodosComponent } from './personal-todos/personal-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkTodosComponent,
    PersonalTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
