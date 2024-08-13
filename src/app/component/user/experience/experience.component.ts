import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { Experience } from '../../../interfaces/user/experience';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatCardModule, CommonModule, TimelineModule, FormsModule,FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experienceList: Experience[] = []
  @Output() updateExperience = new EventEmitter<Experience[]>()

  faXmark = faXmark
  experineces: Experience[] = []

  ngOnChanges() {
    if (this.experienceList) {
      this.experineces= this.experienceList
    }
  }


  removeEducation(index: number) {
    if (index > -1 && index < this.experineces.length) {
      this.experineces.splice(index, 1);
    }
    this.updateExperience.emit(this.experineces);
  }

  onAddEducation(){
    const newEducation : Experience={
      companyName: 'TEST',
      position: 'Developer'
    }
    this.experienceList.push(newEducation);
    this.experineces = [...this.experienceList];
    this.updateExperience.emit(this.experineces)
  }

}
