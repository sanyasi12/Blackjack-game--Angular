import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalScoreService {

  constructor() { }

  public getScore(arr:any[]){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // card is number or not        
      if (!isNaN(arr[i])) {
        sum += arr[i]
      } else {
        if ((arr[i] == "J") || (arr[i] == "K") || (arr[i] == "Q")) {
          // If cards having jack, King or Queen value 10
          sum += 10
        } else {
          // Here checking that if the score greater than 11 add 1 otherwise add 11 in sum.                
          if (sum > 11) {
            sum += 1
          } else {
            sum += 11
          }
        }
      }
    }
    return sum

  }

}
