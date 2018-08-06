import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { ContactModel } from './contact.model';

@Component({
  selector: 'aa-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent {
  public data:ContactModel = new ContactModel();
  private submitted:boolean = false;

  constructor (){}

  onSubmit():void {
    console.log("send email", this.data);

    /*emailjs.send('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', this.data)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        this.submitted = true;
      })
      .catch(err => console.error(err));*/
  }


}
