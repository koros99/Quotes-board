import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"If you think you can, you can. If you think you can't, you're right.", "Kelvin Kilel", "Victor Kilel", new Date(2019, 2, 23), 0, 0),
    new Quote(1,"Give me six hours to chop down a tree, I'll spend the first four sharpening my axe.", "Abraham Lincoln", "Victor Kilel", new Date(2019, 2, 24), 0, 0),
    new Quote(1,"Not all those who wonder are lost", "J R R Tolkien", "Koros Kiprono", new Date(2019,2,25), 0, 0)
  ]
  addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }
  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].body}`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
