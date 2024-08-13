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
import { MatCardModule } from '@angular/material/card';
import { IUserBody } from './interfaces/user/iuser-body';
import { ContactComponent } from './component/user/contact/contact.component';
import { EducationComponent } from './component/user/education/education.component';
import { SkillComponent } from './component/user/skill/skill.component';
import { InterestsComponent } from './component/user/interests/interests.component';
import { GuildComponent } from './component/user/guild/guild.component';
import Swal from 'sweetalert2';
import { ExperienceComponent } from './component/user/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileComponent,
    CommonModule,
    MatCardModule,
    ContactComponent,
    EducationComponent,
    SkillComponent,
    InterestsComponent,
    GuildComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'entroTest-fe';
  users: User[] = [];

  profile: Profile = {
    userName: '',
    nickName: '',
    firstName: '',
    lastName: '',
    position: '',
    nationality: '',
    telephoneNumber: '',
    startDate: new Date(),
  };

  contact: Contact = {
    address: '',
    subDistrict: '',
    district: '',
    province: '',
    postalCode: '',
    facebook: '',
    line: '',
    instagram: '',
  };

  educationList: Education[] = [];
  experienceList: Experience[] = [];
  skillList: Skill[] = [];
  interestsList: Interests[] = [];
  guildList: Guild[] = [];

  UpdateUserBody: IUserBody = {
    profile: this.profile,
    contact: this.contact,
    education: [],
    experience: [],
    skill: [],
    interests: [],
    guild: [],
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getProfile().subscribe((user: User[]) => {
      this.users = user;
      const updatedUser = this.users[0];
      this.profile = updatedUser.profile;
      this.contact = updatedUser.contact;
      this.educationList = updatedUser.education;
      this.experienceList = updatedUser.experience;
      this.skillList = updatedUser.skill;
      this.interestsList = updatedUser.interests;
      this.guildList = updatedUser.guild;
    });
  }

  updateProfile(newProfile: Profile) {
    this.profile = newProfile;
  }

  updateContact(newContact: Contact) {
    this.contact = newContact;
  }

  updateEducation(newEducation:Education[]){
    this.educationList = [...newEducation]
  }
  updateExperience(newExperience:Experience[]){
    this.experienceList = [...newExperience]
  }

  updateSkills(newSkills: Skill[]) {
    this.skillList = [...newSkills];
  }

  updateInterests(newInterests:Interests[]){
    this.interestsList = [...newInterests]
  }

  updateGuilds(newGuilds:Guild[]){
    this.guildList = [...newGuilds]
  }

  onSubmit() {
    const updateUserBody: IUserBody = {
      profile: this.profile,
      contact: this.contact,
      education: this.educationList,
      experience: this.experienceList,
      skill: this.skillList,
      interests: this.interestsList,
      guild: this.guildList,
    };

    console.log(updateUserBody)

    Swal.fire({
      title: "Do you want to save the changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
      confirmButtonColor :"#11abc1"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.updateProfile(updateUserBody).subscribe({
          next: (res) => { console.log("Profile updated successfully", res) },
          error: (err) => { console.log(err) }
        })
        setTimeout(()=>{
          window.location.reload();
        },500)

      }
    });

  }
}
