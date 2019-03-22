import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,"If you think you can, you can. If you think you can't, you're right.", "Kelvin Kilel", "Victor Kilel"),
    new Quote(1,"Give me six hours to chop down a tree, I'll spend the first four sharpening my axe.", "Abraham Lincoln", "Victor Kilel"),

  ]

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }
  constructor() { }

  ngOnInit() {
  }

}
