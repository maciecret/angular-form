import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookItemComponent } from './components/book-item/book-item.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { BookListComponent } from './pages/book-list/book-list.component';
import { CommandBarComponent } from 'src/app/shared/components/command-bar/command-bar.component';



@NgModule({
  declarations: [
  
    BookItemComponent,
    BookFormComponent,
    BookListComponent,
    CommandBarComponent

  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class BookModule { }
