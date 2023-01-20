import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BookServiceService } from '../../services/book-service.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {



  books: Book[] = []

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    //CREATING AND SUBSCRIBE TO OBSERVABLES ??? //
    this.bookService.getBooks().subscribe((books) => this.books = books);
  }



}
