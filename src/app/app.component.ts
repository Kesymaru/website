import {Component, OnDestroy, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import {Subject} from "rxjs/Subject";

export const PRIMARY_TEXT_THRESHOULD:number = 25;
export const PRIMARY_SHADOW_THRESHOULD:number = 78;

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy{
  public primaryToolbarText:boolean = false;
  public primaryToolbarShadow:boolean = false;

  private _onDestroy = new Subject();

  contructor() {}

  ngOnInit() {
    fromEvent
    fromEvent(window, 'scroll')
      .takeUntil(this._onDestroy)
      .subscribe( ()  => this.determinateHeader(window.scrollY))
  }

  determinateHeader(top: number) {
    this.primaryToolbarText = top >= PRIMARY_TEXT_THRESHOULD;
    this.primaryToolbarShadow = top >= PRIMARY_SHADOW_THRESHOULD;
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}
