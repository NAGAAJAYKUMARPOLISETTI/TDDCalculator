import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  public addition(input: string):number{
    if(input === ''){
      return 0;
    }
    const inputNumbers = input.replace(/\n/g,',').split(',');
    const sum=inputNumbers.reduce((total,num)=>total + parseInt(num,10),0);
    return sum;
  }
}
