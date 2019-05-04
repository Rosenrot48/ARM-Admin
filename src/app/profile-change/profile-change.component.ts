import { Component, OnInit } from '@angular/core';
import {Stub_profile} from '../Stub_profile';

@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.css']
})
export class ProfileChangeComponent implements OnInit {
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
