import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  gender: any = [
    { id: 1, value: 'Female' },
    { id: 2, value: 'Male' },
  ];
  header = ['id', 'first_name', 'last_name', 'email', 'gender'];
  rows = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female',
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male',
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female',
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male',s
    },
  ];

  constructor(private formBuilder :FormBuilder) {}
  ongenederchnage(e) {}
  onSubmit(data){
    var firstname=data['firstname'];
    var lastname=data['lastname'];
    var mail=data['email'];
  }
}
