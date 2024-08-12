import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Guild } from '../../../interfaces/user/guild';

@Component({
  selector: 'app-guild',
  standalone: true,
  imports: [MatCardModule, CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './guild.component.html',
  styleUrl: './guild.component.scss',
})
export class GuildComponent {
  @Input() guildList: Guild[] = [];
  @Output() updateGuilds = new EventEmitter<Guild[]>()

  guilds:Guild[] = []
  faCircleXmark = faCircleXmark;


  ngOnChanges() {
    if (this.guildList) {
      this.guilds = this.guildList;
    }
  }


  onAddGuild(){
    const newInterest : Guild={
      name: 'Guild'
    }
    this.guilds.push(newInterest)
    this.updateGuilds.emit(this.guilds)
  }

  onDeleteGuild(index:number){
    if (index >= 0 && index < this.guilds.length) {
      this.guilds.splice(index, 1);
    }
    this.updateGuilds.emit(this.guilds)
  }
}
