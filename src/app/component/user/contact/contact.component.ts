import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../../interfaces/user/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() contact: Contact | undefined;
  @Output() updatedContact = new EventEmitter<Contact>()


  contactInfo: Contact = {
    address: '',
    subDistrict: '',
    district: '',
    province: '',
    postalCode: '',
    facebook: '',
    line: '',
    instagram: ''
  }

  ngOnChanges() {
    if (this.contact) {
      this.contactInfo.address = this.contact.address || ''
      this.contactInfo.subDistrict = this.contact.subDistrict || ''
      this.contactInfo.district = this.contact.district || ''
      this.contactInfo.province = this.contact.province || ''
      this.contactInfo.postalCode = this.contact.postalCode || ''
      this.contactInfo.facebook = this.contact.facebook || ''
      this.contactInfo.line = this.contact.line || ''
      this.contactInfo.instagram = this.contact.instagram || ''
    }
  }

  updateContactInfomation(){
    const newContact: Contact = this.contactInfo
    this.updatedContact.emit(newContact)
  }


  onContractChange() {
    this.updateContactInfomation()
  }
}
