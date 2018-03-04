import { Component } from '@angular/core';

@Component({
  selector: 'aa-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
  public skills:Skill[] = [
    {
      title: 'Javascript',
      total: 7,
      text: 'Expert'
    },
    {
      title: 'HTML',
      total: 7,
      text: 'Expert'
    },
    {
      title: 'CSS',
      total: 7,
      text: ''
    },
    {
      title: 'Angular',
      total: 4,
      text: ''
    },
    {
      title: 'SASS',
      total: 3,
      text: ''
    },
    {
      title: 'test',
      total: 1,
    }
  ];
  public languages:Skill[] = [
    {
      title: 'English',
      total: 85,
      text: 'Good'
    },
    {
      title: 'Spanish',
      total: 100,
      text: 'Native Speaker'
    },
    {
      title: 'Japanese',
      total: 15,
      text: 'Elementary'
    },
  ];
  public startedYear:number = 2011;

  constructor() {
    let year:number = new Date().getFullYear();
    let years = year - this.startedYear;
    /*this.skills.map(skill => {
      skill.total = (skill.total * 100) / years;
      return skill;
    });*/
  }

}

export interface Skill {
  title: string,
  total: number,
  text?: string,
}
