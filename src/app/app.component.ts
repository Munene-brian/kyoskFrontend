import { Component, OnInit } from '@angular/core';
import { Book, BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kyosk';

  //books:Book [] = [];
  books:any [] =[]
  console:any [] =[];
  
  constructor (private bookService: BookService){}
  ngOnInit(): void {
    this.fetchBook();
  }
  fetchBook():void{
    this.bookService.getBooks().subscribe(
      (data) => {
        this.books = data;
        console.log("books:"+ this.books);
      },
      (error)=> {
        console.error("Found error"+error);
      }
    );
  }
}