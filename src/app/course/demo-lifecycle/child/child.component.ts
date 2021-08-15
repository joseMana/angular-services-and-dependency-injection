import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
  DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() userList: string[] = [];
  @ViewChild('titleText') titleTextRef: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.titleTextRef);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.titleTextRef);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public logUserList(): void {
    console.log(this.userList);
  }
}
