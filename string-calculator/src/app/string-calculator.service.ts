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
    return 0;
  }
}
