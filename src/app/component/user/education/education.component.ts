import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Education } from '../../../interfaces/user/education';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, TimelineModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input() educationList: Education[] = [];
  @Output() updateEducation = new EventEmitter<Education[]>()

  education: Education[] = [];

  ngOnChanges() {
    if (this.educationList) {
      this.education = this.educationList;
    }
  }

  removeEducation(index: number) {
    if (index > -1 && index < this.educationList.length) {
      this.educationList.splice(index, 1);
    }
  }

  onAddEducation(){
    const newEducation : Education={
      universityName: 'University',
      educationDate: 'Year'
    }
    this.educationList.push(newEducation);
    this.education = [...this.educationList];
    this.updateEducation.emit(this.education)
  }
}
