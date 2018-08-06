import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { OverlayContainer } from "@angular/cdk/overlay";

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

export class AppComponent implements OnInit {
  public menuItems:Menu[] = [
    {
      title: 'Information',
      icon: 'info',
      router: 'info'
    },
    {
      title: 'Skills',
      icon: 'code',
      router: 'skills'
    },
    {
      title: 'Experience',
      icon: 'work',
      router: 'experience'
    },
    {
      title: 'Porfolio',
      icon: 'assignment_ind',
      router: 'porfolio'
    },
    {
      title: 'Contact',
      icon: 'email',
      router: 'contact'
    }
  ];
  public title:string = 'Andrey Alfaro';
  public isMobile:boolean = false;
  public sidenavConfig:SidenavConfig = DESKTOP_SIDENAV;
  public themes:Theme[] = [
    {
      name: 'Light theme',
      className: 'light-theme',
      dark: false
    },
    {
      name: 'Dark theme',
      className: 'dark-theme',
      dark: true
    }
  ];
  public theme:Theme = this.themes[1];

  private container:any = null;

  @HostBinding('class') componentCssClass;

  constructor(
    public breakpoint: BreakpointObserver,
    public overlayContainer: OverlayContainer) {

    // mobile breakpoint
    breakpoint.observe(Breakpoints.mobile)
      .subscribe(r => this.onMobile(r));

    // desktop breakpoint
    breakpoint.observe(Breakpoints.desktop)
      .subscribe(r => this.onDesktop(r));
  }

  private onMobile(result:any):void {
    this.isMobile = result.matches;
    if (result.matches) this.sidenavConfig = MOBILE_SIDENAV;
  }

  private onDesktop(result:any):void {
    console.log('desktop', result);
    if (result.matches) this.sidenavConfig = DESKTOP_SIDENAV;
  }

  public setTheme(theme:Theme):void {
    // remove previus theme class
    this.container.classList.remove(this.theme.className);
    this.theme = theme;

    // set theme class on the element
    this.container.classList.add(this.theme.className);
    this.componentCssClass = this.theme.className;
  }

  ngOnInit(): void{
    // set the element
    this.container = this.overlayContainer.getContainerElement();

    // default theme
    this.setTheme(this.themes[1]);
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

export interface Theme {
  name: string,
  className: string,
  dark: boolean
}
