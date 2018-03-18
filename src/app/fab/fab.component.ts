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
  public top:string = '35px';

  private height:number = 0;
  private max:number = 0;

  constructor() {}

  public toggle():void {
    console.log('toggle show');
    this.show = !this.show;
  }

  public ngOnInit():void {
    this.height = document.body.offsetHeight;
    this.max = document.documentElement.clientHeight;

    console.log('init fab', this.height, this.max);

    fromEvent(window, 'scroll')
      // .takeUntil(this._onDestroy)
      .subscribe( ()  => this.onScroll(window.scrollY))
  }

  private onScroll(top: number):void {
    let diff = this.height - top;
    console.log('diff', this.height, top, this.max, diff);

    if(diff <= this.max) this.top = '100px';
    else this.top = '35px';

    console.log('top', this.top);

    // this.primaryToolbarText = top >= PRIMARY_TEXT_THRESHOULD;
    // this.primaryToolbarShadow = top >= PRIMARY_SHADOW_THRESHOULD;
  }

  ngOnDestroy() {

    // this._onDestroy.next();
  }
}
