import {Component, OnDestroy, OnInit} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import {Subject} from "rxjs/Subject";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

import {ShareDialogComponent} from "./share/share.component";

export const PRIMARY_TEXT_THRESHOULD:number = 25;
export const PRIMARY_SHADOW_THRESHOULD:number = 78;

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy{
  public primaryToolbarText:boolean = false;
  public primaryToolbarShadow:boolean = false;
  public menuItems = ['Information', 'Skills', 'Experience'];

  private _onDestroy = new Subject();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    fromEvent(window, 'scroll')
      .takeUntil(this._onDestroy)
      .subscribe( ()  => this.determinateHeader(window.scrollY))
  }

  determinateHeader(top: number): void {
    this.primaryToolbarText = top >= PRIMARY_TEXT_THRESHOULD;
    this.primaryToolbarShadow = top >= PRIMARY_SHADOW_THRESHOULD;
  }

  share(){
    console.log('share website', this.dialog);

    let dialogRef = this.dialog.open(ShareDialogComponent, {
      width: '250px',
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}
