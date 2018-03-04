import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

export const PRIMARY_TEXT_THRESHOULD:number = 25;
export const PRIMARY_SHADOW_THRESHOULD:number = 78;

const DESKTOP_SIDENAV:SidenavConfig = {
  mode: 'side',
  opened: true,
};
const MOBILE_SIDENAV:SidenavConfig = {
  mode: 'over',
  opened: false,
};
const Breakpoints:any = {
  mobile: '(max-width: 576px)',
  desktop: '(min-width: 768px)',
};

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
  public title:string = 'Andrey Alfaro - Full Stack Developer';
  public sidenavConfig:SidenavConfig = DESKTOP_SIDENAV;

  private _onDestroy = new Subject();

  constructor(breakpoint: BreakpointObserver) {
    // mobile breakpoint
    breakpoint.observe(Breakpoints.mobile)
      .subscribe(result => {
        if (result.matches) this.sidenavConfig = MOBILE_SIDENAV;
      });
    // desktop breakpoint
    breakpoint.observe(Breakpoints.desktop)
      .subscribe(result => {
        if (result.matches) this.sidenavConfig = DESKTOP_SIDENAV;
      });
  }

  ngOnInit() {
    fromEvent(window, 'scroll')
      .takeUntil(this._onDestroy)
      .subscribe( ()  => this.determinateHeader(window.scrollY))
  }

  determinateHeader(top: number): void {
    this.primaryToolbarText = top >= PRIMARY_TEXT_THRESHOULD;
    this.primaryToolbarShadow = top >= PRIMARY_SHADOW_THRESHOULD;
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}

export interface Menu {
  icon: string,
  title: string,
}

export interface SidenavConfig {
  mode: string,
  opened: boolean
}
