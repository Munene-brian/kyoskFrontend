import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Book {
  id: string;
  title: string;
  author: string;
}
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = "http://localhost:8089/api/books";

  constructor( private http: HttpClient) { 
  
  }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
