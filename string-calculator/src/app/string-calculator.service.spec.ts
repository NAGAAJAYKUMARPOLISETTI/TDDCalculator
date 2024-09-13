import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0 when the input is empty string',()=>{
    expect(service.addition("")).toEqual(0);
  })

  it('should return input number when input contains only one number',()=>{
    expect(service.addition("1")).toEqual(1);
  })
});
