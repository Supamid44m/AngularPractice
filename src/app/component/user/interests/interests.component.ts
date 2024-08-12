import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Interests } from '../../../interfaces/user/interests';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';;
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule,MatCardModule,FormsModule,FontAwesomeModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss',
})
export class InterestsComponent {
  @Input() interestsList: Interests[] = [];
  @Output() updatedInterests = new EventEmitter<Interests[]>()

  interests: Interests[] = [];

  faCircleXmark=faCircleXmark

  ngOnChanges() {
    if (this.interestsList) {
      this.interests = this.interestsList;
    }
  }


  onAddInterests(){
    const newInterest : Interests={
      name: 'Interest'
    }
    this.interests.push(newInterest)
    this.updatedInterests.emit(this.interests)
  }

  onDeleteInterest(index:number){
    if (index >= 0 && index < this.interests.length) {
      this.interests.splice(index, 1);
    }
    this.updatedInterests.emit(this.interests)
  }
}
