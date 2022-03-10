import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './Components/dialog/dialog.component';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './Components/table/table.component';
import {FormsModule} from '@angular/forms';
import { FilterComponent } from './Components/filter/filter.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { TaskFilterPipe } from './Components/table/task-filter.pipe';
import { StageFilterPipe } from './Components/table/stage-filter.pipe';
import { StatusFilterPipe } from './Pipes/status-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { DateFilterPipe } from './Pipes/date-filter.pipe';
import { DateRangeFilterPipe } from './Pipes/date-range-filter.pipe';
import {MatChipsModule} from '@angular/material/chips';
import { DataListComponent } from './Components/data-list/data-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DialogComponent,
    TableComponent,
    FilterComponent,
    TaskFilterPipe,
    StageFilterPipe,
    StatusFilterPipe,
    DateFilterPipe,
    DateRangeFilterPipe,
    DataListComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
