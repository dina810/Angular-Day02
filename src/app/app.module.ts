import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';

import { ReactiveFormsModule } from '@angular/forms';
import { RecordsPipe } from './records.pipe';
import { SharedModule } from './shared/shared.module';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    RecordsPipe,
    HighlightDirective,
   
    

  ],
  imports: [
    BrowserModule,
    StudentModule,
    DepartmentModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  exports:[
    RecordsPipe,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
