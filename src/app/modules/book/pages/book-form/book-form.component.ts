import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

import {FormBuilder} from '@angular/forms'
import {FormControl} from '@angular/forms' //WHAT IS THIS



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  constructor(private formBuilder: FormBuilder){}

  blogForm = this.formBuilder.group({
    title:[''],
    description:[''],
    authors:[''],
    comments:['']

  })

  

}
