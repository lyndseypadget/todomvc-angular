import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { WorkTodosComponent } from './work-todos/work-todos.component';
import { PersonalTodosComponent } from './personal-todos/personal-todos.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkTodosComponent,
    PersonalTodosComponent,
    VirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
