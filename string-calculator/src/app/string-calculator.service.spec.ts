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

  it('should return the sum of two numbers separated by comma',()=>{
    expect(service.addition("1,5")).toEqual(6);
  })

  it('should return sum of multiple numbers',()=>{
    expect(service.addition("1,2,3,4")).toEqual(10);
  })

  it('should return sum when input values are separated by new lines',()=>{
    expect(service.addition("1\n2,3")).toEqual(6);
  })

  it('should support the custom delimiters',()=>{
    expect(service.addition("//;\n1;2")).toEqual(3);
  })
});
