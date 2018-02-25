import {Component} from "@angular/core";

@Component({
  selector: 'aa-contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent {

  constructor (){}

  send():void {
    console.log("send email")
  }
}
