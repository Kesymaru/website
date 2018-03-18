import { Component, OnDestroy, OnInit } from "@angular/core";

import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'aa-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})

export class FabComponent implements OnInit, OnDestroy {
  public show:boolean = false;
  public actions:any[] = [{
    title: 'Contact',
    color: 'primary'
  }, {
    title: 'Test',
    color: 'accent'
  }];

  constructor() {}

  public toggle():void {
    console.log('toggle show');
    this.show = !this.show;
  }

  public ngOnInit():void {
    console.log('fab on init');

    fromEvent(window, 'scroll')
      // .takeUntil(this._onDestroy)
      .subscribe( ()  => this.onScroll(window.scrollY))
  }

  private onScroll(top: number):void {
    console.log('scroll', document.body.offsetHeight, top, (document.body.offsetHeight - top));
    // this.primaryToolbarText = top >= PRIMARY_TEXT_THRESHOULD;
    // this.primaryToolbarShadow = top >= PRIMARY_SHADOW_THRESHOULD;
  }

  ngOnDestroy() {

    // this._onDestroy.next();
  }
}
