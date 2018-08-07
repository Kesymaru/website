import { Component } from "@angular/core";
import { MatSnackBar } from '@angular/material';

import { ContactModel } from './contact.model';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'aa-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent {
  private USER_ID : string = 'user_9LIbRrL6eeuSEmW4ZiCQw';
  private TOKEN : string = '3f4643d0945716a86f8319f7b47a8b67';
  private SERVICE_ID : string = 'gmail';
  private TEMPLATE_ID : string = 'test_4';

  public data : ContactModel = new ContactModel();
  public phonePattern : string = '((?:\\+|00)[17](?: |\\-)?|(?:\\+|00)[1-9]\\d{0,2}(?: |\\-)?|(?:\\+|00)1\\-\\d{3}(?: |\\-)?)?(0\\d|\\([0-9]{3}\\)|[1-9]{0,3})(?:((?: |\\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\\-)[0-9]{3}(?: |\\-)[0-9]{4})|([0-9]{7}))';

  constructor(public snackBar: MatSnackBar){
    emailjs.init(this.USER_ID);
  }

  onSubmit() : void {
    console.log("send email", this.data);

    if(this.data.sendResume) this.sendResume();

    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, this.data)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        this.clear();
        this.openSnackBar('Contact email sent!');
      })
      .catch(err => {
        console.error(err);
        this.openSnackBar('An error happened.');
      });

    this.openSnackBar('Contact email sent!');
  }

  private sendResume() : void {
    console.log('send resume to email');
  }

  private clear():void {
    this.data = new ContactModel();
  }

  public openSnackBar(message:string, action:string = 'Ok'):void {
    console.log('open notification');

    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
