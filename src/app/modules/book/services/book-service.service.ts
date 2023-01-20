import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http';


import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  private apiUrl = "http://localhost:5000/books"

  constructor(private http: HttpClient) { }

  getBooks(): Observable <Book[]>{
    return this.http.get<Book[]>(this.apiUrl)
  }
}
