import {Component, OnDestroy, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

export const PRIMARY_TEXT_THRESHOULD:number = 25;
export const PRIMARY_SHADOW_THRESHOULD:number = 78;

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy{
  public primaryToolbarText:boolean = false;
  public primaryToolbarShadow:boolean = false;
  public menuItems:Menu[] = [
    {
      title: 'Information',
      icon: 'info'
    },
    {
      title: 'Skills',
      icon: 'code'
    },
    {
      title: 'Experience',
      icon: 'work'
    },
    {
      title: 'Porfolio',
      icon: 'assignment_ind'
    },
    {
      title: 'Contact',
      icon: 'email'
    }
  ];

  private _onDestroy = new Subject();

  constructor() {}

  ngOnInit() {
    fromEvent(window, 'scroll')
      .takeUntil(this._onDestroy)
      .subscribe( ()  => this.determinateHeader(window.scrollY))
  }

  determinateHeader(top: number): void {
    this.primaryToolbarText = top >= PRIMARY_TEXT_THRESHOULD;
    this.primaryToolbarShadow = top >= PRIMARY_SHADOW_THRESHOULD;
  }

  // TODO: share dialog
  share(){
    console.log('todo share dialog')
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}

export interface Menu {
  icon: string,
  title: string,
}
