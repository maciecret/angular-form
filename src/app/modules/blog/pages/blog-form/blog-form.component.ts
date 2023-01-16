import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {FormControl} from '@angular/forms' //WHAT IS THIS

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {
  constructor(private formBuilder: FormBuilder){}

  blogForm = this.formBuilder.group({
    title:[''],
    description:[''],
    authors:[''],
    comments:['']

  })

}
