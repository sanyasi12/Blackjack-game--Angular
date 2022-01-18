import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { MessageStatusService } from './message-status.service';
import { TotalScoreService } from './total-score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public player: any = [];
  public dealer: any = [];
  public disableBtn: boolean = false;
  public playerScore: number = 0;
  public dealerScore: number = 0;
  public message: string = "";
  public playerCardLength:number = this.player.length;
  public dealerCardLength:number = this.dealer.length;


  constructor(public cards: CardsService, public messageStatus: MessageStatusService, public totalScore: TotalScoreService) { }

  ngOnInit(): void {
    //Intially start the game when application load
    this.startGame()
  }

  public startGame() {

    // Initially 2 cards showing in each player
    this.player.push(this.cards.drawRandomCard());
    this.player.push(this.cards.drawRandomCard());
    this.dealer.push(this.cards.drawRandomCard());
    this.dealer.push(this.cards.drawRandomCard());

   // Intially checking score
    this.playerScore = this.totalScore.getScore(this.player);
    this.dealerScore = this.totalScore.getScore(this.dealer);

   //Player having equal or more than 21 then showing message
    if (this.playerScore >= 21) {
      this.deal()
    }
  }

  // Clear the old game and load the new game
  public newGame() {
    this.player = [];
    this.dealer = [];
    this.playerScore = 0;
    this.dealerScore = 0;
    this.message = "";
    this.disableBtn = false;
    this.startGame()
  }

  // Calculation score of the cards
  public playerHit() {
    //if player not bust then he hit the card.
    if (this.playerCardLength < 5) {
      this.playerScore = this.totalScore.getScore(this.player);
      if (this.playerScore < 21) {
        this.player.push(this.cards.drawRandomCard());
        this.playerScore = this.totalScore.getScore(this.player);
      }

      //Player having equal or more than 21 then showing message
      if (this.playerScore >= 21) {
        this.deal()
      }
    }
  }

  public dealerHit() {
    //if dealer not bust then he hit the card.
    if (this.dealerCardLength < 5) {
      this.dealerScore = this.totalScore.getScore(this.dealer);
      if (this.dealerScore < 21) {
        this.dealer.push(this.cards.drawRandomCard());
        this.dealerScore = this.totalScore.getScore(this.dealer)
      }
            
      //Dealer having equal or more than 21 then showing message
      if (this.dealerScore >= 21) {
        this.deal()
      }
    }
  }


  public stay() {
    this.deal()
  }

  public deal() {
    this.playerScore = this.totalScore.getScore(this.player);
    this.dealerScore = this.totalScore.getScore(this.dealer);

    //According to condition message show
    this.message = this.messageStatus.sendStatus(this.playerScore, this.dealerScore, this.player);
    
    // Disable the buttons like player hit or dealer hit when any one lose or won the game
    this.disableBtn = true
  }

}


