import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Profile } from '../../../interfaces/user/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() profile : Profile | undefined
  

  

}
