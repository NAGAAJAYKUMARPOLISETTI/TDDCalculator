import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  public addition(input: string): number {
    if (input === '') {
      return 0;
    }
    let delimiter = ',';
    let updatedInput = input;

    //multi-character delimiter
    if (input.startsWith('//[')) {
      const delimiterValues = input.match(/^\/\/(\[.+?\])\n/);
      if (delimiterValues) {
        delimiter = delimiterValues[1].replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        updatedInput = input.substring(delimiterValues[0].length);
      }
    }
    //single-character delimiter
    else if (input.startsWith('//')) {
      const delimiterValues = input.match(/^\/\/(.)\n/);
      if (delimiterValues) {
        delimiter = delimiterValues[1];
        updatedInput = input.substring(delimiterValues[0].length);
      }
    }

    const delimterExp = new RegExp(`[${delimiter}\n]`, 'g');
    const inputNumbers = updatedInput.split(delimterExp).filter(x => x !== '' && x !== delimiter);
    const negativeValues = inputNumbers.filter(num => parseInt(num, 10) < 0);
    if (negativeValues.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeValues.join(', ')}`);
    }

    const sum = inputNumbers.reduce((total, num) => total + parseInt(num, 10), 0);
    return sum;
  }
}
