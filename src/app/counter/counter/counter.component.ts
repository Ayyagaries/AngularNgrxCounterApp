import { Component, OnInit } from '@angular/core';
import {CounterService} from "./../../service/counter.service"
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 
  constructor(private counterService:CounterService) { }

  ngOnInit(): void {
     
  }

  onIncrement(): void {
      this.counterService.onIncrement()
     
  }

  getCounter(): number {
   return this.counterService.getCounter()
  }

  onDecrement(): void {
    this.counterService.onDecrement();
  }

  onReset(): void {
    this.counterService.onReset();
  }


  

}
