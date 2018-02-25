import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'aa-information',
  templateUrl: './information.component.html'
})

export class InformationComponent{

  public data: Information[] = [
    {
      icon: 'perm_identity',
      title: 'Full Name',
      text: 'Carlos Andrey Alfaro Alvarado',
    },
    {
      icon: 'home',
      title: 'Location',
      text: 'Costa Rica, Heredia',
    },
    {
      icon: 'place',
      title: 'Place of birth',
      text: 'Costa Rica',
    },
    {
      icon: 'date_range',
      title: 'Date of birth',
      text: 'July 3rd 1991',
    },
    {
      icon: 'wc',
      title: 'Gender',
      text: 'Male'
    },
    {
      icon: 'phone',
      title: 'Phone',
      text: '+506 8734-3244',
      link: 'tel:+50687343244'
    },
    {
      icon: 'email',
      title: 'Email',
      text: 'andreyalfaro@gmail.com',
      link: 'mailto:andreyalfaro@gmail.com'
    },
    {
      icon: 'voice_chat',
      title: 'Skype',
      text: 'kesymaru',
      link: 'skype:kesymaru?call'
    },
    {
      icon: 'business',
      title: 'Linkedin',
      text: 'Andrey Alfaro',
      link: 'https://www.linkedin.com/in/andreyalfaro'
    },
  ];
  public columnsToDisplay: string[] = ['icon', 'title', 'text'];

  constructor (private sanitizer: DomSanitizer){}

  /**
   * Sanitize the url links
   * @param {string} url
   * @returns {string}
   */
  sanitize(url: string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}

export interface Information {
  icon: string,
  title: string,
  text: string,
  link?: string
}
