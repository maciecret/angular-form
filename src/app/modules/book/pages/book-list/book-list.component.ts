import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books:  Book[] = [
    {
      id: 1,
      Title: "Divergent",
      Author: "Veronica Roth",
      Description: "Book 1"
    },
    {
      id: 2,
      Title: "Convergent",
      Author: "Veronica Roth",
      Description: "Book 2"
    },
    {
      id: 3,
      Title: "Insurgent",
      Author: "Veronica Roth",
      Description: "Book 3"
    },
    {
      id: 4,
      Title: "Allegiant",
      Author: "Allegiant",
      Description: "Book 4"
    }
  ]

  // books: Book[] = []

  // constructor(private bookService: BookServiceService) { }

  // ngOnInit(): void {
  //   //CREATING AND SUBSCRIBE TO OBSERVABLES ??? //
  //   this.bookService.getBooks().subscribe((books) => this.books = books);
  // }



}
