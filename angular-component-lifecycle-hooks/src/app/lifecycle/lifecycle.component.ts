import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, 
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  executionCounter:number = 0;

  constructor(){console.log('Constructor', this.executionCounter); this.executionCounter++;}
  ngOnInit(): void {
    console.log('OnInit', this.executionCounter); this.executionCounter++;
  }
  ngDoCheck(): void {
    console.log('DoCheck', this.executionCounter); this.executionCounter++;
  }  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', this.executionCounter); this.executionCounter++;
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.executionCounter); this.executionCounter++;
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked', this.executionCounter); this.executionCounter++;
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.executionCounter); this.executionCounter++;
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked', this.executionCounter); this.executionCounter++;
  }
  ngOnDestroy(): void {
    console.log('OnDestroy', this.executionCounter); this.executionCounter++;
  }
}
