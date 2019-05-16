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
         { id : 1,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'user',
           name: 'GENERAL_USERS',
           parentClassCode: '',
           tableName: 'users'
         },
         {
           id: 2,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'status',
           name: 'GENERAL_STATUS',
           parentClassCode: '',
           tableName: 'status'
         },
         {
           id: 3,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'group',
           name: 'GENERAL_GROUPS',
           parentClassCode: '',
           tableName: 'groups'
         },
         {
           id: 4,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'otp',
           name: 'GENERAL_OTP',
           parentClassCode: '',
           tableName: 'otp'
         },
         {
           id: 5,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'xattr',
           name: 'EXTENDED_ATTRIBUTES',
           parentClassCode: '',
           tableName: 'xattr'
         },
         {
           id: 6,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'session',
           name: 'GENERAL_SESSIONS',
           parentClassCode: '',
           tableName: 'sessions'
         },
         {
           id: 7,
           createTime: '2019-04-25T13:11:03.644+0000',
           changeTime: '2019-04-25T13:11:03.644+0000',
           code: 'bankUsers',
           name: 'BANK_USERS',
           parentClassCode: 'user',
           tableName: 'users'
         },
         {
           id: 8,
           createTime: '2019-04-25T13:11:06.708+0000',
           changeTime: '2019-04-25T13:11:06.708+0000',
           code: 'partnerUsers',
           name: 'PARTNER_USERS',
           parentClassCode: 'user',
           tableName: 'users'
         },
         {
           id: 9,
           createTime: '2018-12-31T21:00:00.000+0000',
           changeTime: null,
           code: 'branch',
           name: 'GENERAL_BRANCH',
           parentClassCode: '',
           tableName: 'branch'
         },
       { id : 10,
         createTime: '2018-12-31T21:00:00.000+0000',
         changeTime: null,
         code: 'user',
         name: 'PARENT_USERS',
         parentClassCode: '',
         tableName: 'users'
       },
       { id : 11,
         createTime: '2018-12-31T21:00:00.000+0000',
         changeTime: null,
         code: 'user',
         name: 'GRAND_USERS',
         parentClassCode: '',
         tableName: 'users'
       },
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
