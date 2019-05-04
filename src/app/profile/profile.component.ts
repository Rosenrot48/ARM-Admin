import { Component, OnInit } from '@angular/core';
import {Stub_profile} from '../Stub_profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profile: Stub_profile = {
  id: 1,
  name: 'Ivan',
  surname: 'Ivanov',
  patronymic: 'Ivanovich',
  position: 'admin',
  subdivision: ' Podryatchick ',
  password: '********'
}

  constructor() { }

  ngOnInit() {
  }

}
