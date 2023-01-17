import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookItemComponent } from './components/book-item/book-item.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
  
    BookItemComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class BookModule { }
