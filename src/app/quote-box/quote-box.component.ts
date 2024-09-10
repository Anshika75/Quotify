import { Component, signal, computed } from '@angular/core';
import { quotes } from '../quotes';

const randomIndex = Math.floor(Math.random() * quotes.length);

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [],
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.css'
})
export class QuoteBoxComponent {
  // currentQuote = quotes[randomIndex];
  // quoteText = this.currentQuote.text;
  currentQuote = signal(quotes[randomIndex]);
  quoteText = computed(() => this.currentQuote().text);
  // get author() {
  //   return '~ ' + this.currentQuote.author;
  // }

  author = computed(() => '~ ' + this.currentQuote().author);

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);  
    // this.currentQuote = quotes[randomIndex];
    // this.quoteText = this.currentQuote.text;
    this.currentQuote.set(quotes[randomIndex]);
    this.quoteText = computed(() => this.currentQuote().text);
  }

}
