import { Component } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";

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

export class AppComponent {
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
  public title:string = 'Andrey Alfaro';
  public isMobile:boolean = false;
  public sidenavConfig:SidenavConfig = DESKTOP_SIDENAV;

  constructor(breakpoint: BreakpointObserver) {
    // mobile breakpoint
    breakpoint.observe(Breakpoints.mobile).subscribe(this.onMobile);

    // desktop breakpoint
    breakpoint.observe(Breakpoints.desktop).subscribe(this.onDesktop);
  }

  private onMobile(result:any):void {
    if (!result.matches) return;
    this.isMobile = true;
    this.sidenavConfig = MOBILE_SIDENAV;
  }

  private onDesktop(result:any):void {
    if (!result.matches) return;
    this.isMobile = false;
    this.sidenavConfig = DESKTOP_SIDENAV;
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
