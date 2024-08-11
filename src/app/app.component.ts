import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './component/user/profile/profile.component';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { User } from './interfaces/user/user';
import { Profile } from './interfaces/user/profile';
import { Contact } from './interfaces/user/contact';
import { Education } from './interfaces/user/education';
import { Experience } from './interfaces/user/experience';
import { Skill } from './interfaces/user/skill';
import { Interests } from './interfaces/user/interests';
import { Guild } from './interfaces/user/guild';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entroTest-fe';
  users: User[] = []

  profile: Profile = {
    userName: '',
    nickName: '',
    firstName: '',
    lastName: '',
    posistion: '',
    nationality: '',
    telephoneNumber: '',
    startDate: new Date()
  }

  contact: Contact = {
    address: '',
    subDistrict: '',
    district: '',
    province: '',
    postalCode: '',
    facebook: '',
    line: '',
    instagram: ''
  }

  educationList: Education[] = []
  experienceList: Experience[] = []
  skillList: Skill[] = []
  interestsList: Interests[] = []
  guildList: Guild[] = []


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe((user: User[]) => {
      this.users = user
      const updatedUser = this.users[0]
      this.profile = updatedUser.profile
      this.contact = updatedUser.contact
      this.educationList = updatedUser.education
      this.experienceList = updatedUser.experience
      this.skillList = updatedUser.skill
      this.interestsList = updatedUser.interests
      this.guildList = updatedUser.guild
    })

  }



}
