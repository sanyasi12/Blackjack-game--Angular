import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  public deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A",
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A",
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A",
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];

// random card pick
public drawRandomCard() {
  let randomIndex = Math.floor(this.deck.length * Math.random());
  return this.deck[randomIndex]
}



}
