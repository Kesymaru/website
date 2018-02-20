import { Component } from '@angular/core';

@Component({
  selector: 'aa-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skills:Array<any> = [
    {
      title: 'JavaScript',
      cols: 2,
      rows: 1,
      color: 'primary',
      total: 100
    },
    {
      title: 'Angular',
      cols: 2,
      rows: 2,
      color: 'primary',
      total: 70
    },
    {
      title: 'Node.js',
      cols: 2,
      rows: 1,
      color: 'primary',
      total: 80
    }
  ];

}
