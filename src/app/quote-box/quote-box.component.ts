import { Component } from '@angular/core';
import { quotes } from '../quotes';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [],
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.css'
})
export class QuoteBoxComponent {
  currentQuote = quotes[0];
  quoteText = this.currentQuote.text;
  get author() {
    return '~ ' + this.currentQuote.author;
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.currentQuote = quotes[randomIndex];
    this.quoteText = this.currentQuote.text; 
  }

}
