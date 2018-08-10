import {Component} from "@angular/core";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'aa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  public email:string;
  public year:number;

  constructor(public snackBar: MatSnackBar){
    this.email = '';
    this.year = new Date().getFullYear();
  }

  public submit():void {
    console.log('submit', this.email);

    this.openSnackBar('Resume sent to your email.');
  }

  public openSnackBar(message:string, action:string = 'Ok'):void {
    console.log('open notification');

    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
