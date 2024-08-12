import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Skill } from '../../../interfaces/user/skill';
import {ProgressBarModule} from 'primeng/progressbar';


@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [MatCardModule,CommonModule,FormsModule,MatProgressBarModule,ProgressBarModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skillList:Skill[] = [] 
  @Output() updatedSkills =  new EventEmitter<Skill[]>()

  skills:Skill[]=[]

  ngOnChanges() {
    if (this.skillList) {
      this.skills = this.skillList;
    }
  }


  addSkill(){
    const newSkill :Skill={
      name: 'Skill',
      level: Math.floor(Math.random() * 10) + 1
    }
    this.skills.push(newSkill)
    this.updatedSkills.emit(this.skills)
  }

}
