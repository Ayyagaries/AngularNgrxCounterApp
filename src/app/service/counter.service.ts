import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter:number = 0; 
  constructor() { }
  
  getCounter():number { return this.counter; }

  onIncrement(): void {
    this.counter++;
  }

  onDecrement(): void {
    this.counter--;
  }

  onReset():void{
      this.counter=0;
  }
}
