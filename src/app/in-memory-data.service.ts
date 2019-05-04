import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Stub_object} from './stub_object';
import {Stub_profile} from './Stub_profile';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
     const  objectsList: Stub_object[] = [
      { id: 11, name: 'Mr. Nice', creat_data: '12-02-2010' },
      { id: 12, name: 'Narco', creat_data: '22-01-2000' },
      { id: 13, name: 'Bombasto', creat_data: '18-01-2007' },
      { id: 14, name: 'Celeritas', creat_data: '13-02-2007' },
      { id: 15, name: 'Magneta', creat_data: '02-01-2017' },
      { id: 16, name: 'RubberMan', creat_data: '15-05-2019' },
      { id: 17, name: 'Dynama', creat_data: '' },
      { id: 18, name: 'Dr IQ', creat_data: '' },
      { id: 19, name: 'Magma', creat_data: '' },
      { id: 20, name: 'Tornado', creat_data: '' },
    ];
     return  { objectsList};
  }
    createDb2() {
      const profileList: Stub_profile[] = [
        {  id: 1,
          name: 'Ivan',
          surname: 'Ivanov',
          patronymic: 'Ivanovich',
          position: 'admin',
          subdivision: ' ',
          password: '********'}
      ];
    }
}
