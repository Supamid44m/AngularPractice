import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Profile } from '../../../interfaces/user/profile';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, MatCardModule,CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() profile: Profile | undefined;
  @Output() updatedProfile  = new EventEmitter<Profile>()

  profileInfo: Profile = {
    userName: '',
    nickName: '',
    firstName: '',
    lastName: '',
    position: '',
    nationality: '',
    telephoneNumber: '',
    startDate: new Date(),
  };

  ngOnChanges() {
    if (this.profile) {
      this.profileInfo.userName = this.profile.userName  || ''
      this.profileInfo.nickName = this.profile.nickName || ''
      this.profileInfo.firstName = this.profile?.firstName || '';
      this.profileInfo.lastName = this.profile?.lastName || '';
      this.profileInfo.position =this.profile.position || '';
      this.profileInfo.nationality=this.profile.nationality || ''
      this.profileInfo.telephoneNumber = this.profile.telephoneNumber || ''
    }
  }

  updateProfileInfomation(){
    const updatedProfile : Profile={
      userName: this.profileInfo.userName,
      nickName: this.profileInfo.nickName,
      firstName: this.profileInfo.firstName,
      lastName: this.profileInfo.lastName,
      position: this.profileInfo.position,
      nationality: this.profileInfo.nationality,
      telephoneNumber: this.profileInfo.telephoneNumber,
      startDate: new Date()
    }
    this.updatedProfile.emit(updatedProfile)

  }

  onProfileChange(){
    this.updateProfileInfomation()
  }
}
