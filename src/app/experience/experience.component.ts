import {Component} from "@angular/core";

@Component({
  selector: 'aa-experience',
  templateUrl: './experience.component.html',
})

export class ExperienceComponent{
  private static readonly showNumber:number = 4;
  public showMore:boolean = false;
  public start:number = 0;
  public end:number = ExperienceComponent.showNumber;
  public experiences:Experience[] = [
    {
      company: 'Epic Software',
      title: 'Lead Developer',
      text: 'Description text',
      start: '2016/12/06',
    },
    {
      company: 'Ex2Code',
      title: 'Sr Web developer',
      text: 'Text goes here',
      start: '2015/10/03'
    },
    {
      company: 'Ex2Code',
      title: 'Sr Web developer',
      text: 'Text goes here',
      start: '2015/10/03'
    },
    {
      company: 'Ex2Code',
      title: 'Sr Web developer',
      text: 'Text goes here',
      start: '2015/10/03'
    },
    {
      company: 'Ex2Code',
      title: 'Sr Web developer',
      text: 'Text goes here',
      start: '2015/10/03'
    }

  ];

  constructor() {}

  toggleMore() {
    this.showMore = !this.showMore;
    this.end = this.showMore
      ? this.experiences.length
      : ExperienceComponent.showNumber;
  }

}

export interface Experience{
  company: string,
  title: string,
  text: string,
  start: string,
  end?: string,
}
