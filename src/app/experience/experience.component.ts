import {Component} from "@angular/core";

@Component({
  selector: 'aa-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent{
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
}

export interface Experience{
  company: string,
  title: string,
  text: string,
  start: string,
  end?: string,
}
