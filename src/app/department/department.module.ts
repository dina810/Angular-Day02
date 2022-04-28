import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { FormsModule } from '@angular/forms';
import { FilterarrPipe } from './filterarr.pipe';
import {SharedModule} from '../shared/shared.module'
import { SearchPipe } from './search.pipe';
import { PowerToPipe } from './power-to.pipe';





@NgModule({
  declarations: [
    DepartmentComponent,
    FilterarrPipe,
    SearchPipe,
    PowerToPipe,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  
  ],
  exports:[
    DepartmentComponent
  ]
})
export class DepartmentModule { }
