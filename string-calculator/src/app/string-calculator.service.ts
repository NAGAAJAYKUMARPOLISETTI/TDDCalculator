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
    let delimiter=',';
    if(input.startsWith('//')){
      const delimiterValues=input.match(/^\/\/(.)\n/);
      if(delimiterValues){
        delimiter=delimiterValues[1];
        input=input.substring(4);
      }
    }
    const inputNumbers = input.replace(/\n/g,delimiter).split(delimiter);
    const negativeValues=inputNumbers.filter(num =>parseInt(num,10)<0);
    if(negativeValues.length> 0){
      throw new Error(`negative numbers not allowed: ${negativeValues.join(', ')}`);
    }

    const sum=inputNumbers.reduce((total,num)=>total + parseInt(num,10),0);
    return sum;
  }
}
