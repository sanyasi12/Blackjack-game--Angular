import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageStatusService {

  constructor() { }

  public sendStatus(playerScore:number, dealerScore:number,player: any[]){
    switch (true) {
      case (playerScore == 21 || (playerScore < 21 && player.length == 5)):
        return "Blackjack player win";
      case (dealerScore == 21):
        return "Blackjack dealer win"
      case (playerScore > 21):
        return "Player lost the game. Please try again"
      case (dealerScore > 21):
        return "Dealer has won. Please try again"
      case ((playerScore == 21) && (dealerScore == 21)):
        return "Game is tie Dealer wins"
      case ((21 - dealerScore) > (21 - playerScore)):
        return "Player has won"
      case ((21 - dealerScore) < (21 - playerScore)):
        return "Dealer has won"
      default:
        return ""
    }

  }

}
