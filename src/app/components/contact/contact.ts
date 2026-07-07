import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../Environments/environment.prod';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  success = false;
  sending = false;

  sendMessage() {
    if (
      !this.contact.name ||
      !this.contact.email ||
      !this.contact.subject ||
      !this.contact.message
    ) {
      return;
    }

    this.sending = true;

    emailjs
      .send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.contact.name,
          reply_to: this.contact.email,
          subject: this.contact.subject,
          message: this.contact.message,
        },
        environment.emailjs.publicKey,
      )
      .then(() => {
        this.success = true;
        this.sending = false;

        this.contact = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };

        setTimeout(() => {
          this.success = false;
        }, 3000);
      })
      .catch((error) => {
        this.sending = false;
        console.error(error);
        alert('Failed to send message. Please try again.');
      });
  }
}
