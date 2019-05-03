import { Injectable } from '@angular/core';
import {Stub_object} from './stub_object';
import {objectsList} from './mock-objects';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getObjects(): Stub_object[] {
  return objectsList;
  }
}
