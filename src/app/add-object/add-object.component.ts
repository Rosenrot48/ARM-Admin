import { Component, OnInit } from '@angular/core';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css']
})
export class AddObjectComponent implements OnInit {
  objects: Stub_object[];
  constructor(private addService: ListService, private location: Location) { }
  ngOnInit() {
  }
  back() {
    this.location.back();
  }
  add(name: string, code: string): void {
    name = name.trim();
    code = code.trim();
    if (!name && !code) {
      return;
    }
    this.addService.addObject({name, code} as Stub_object)
      .subscribe( object => this.objects.push(object)), this.back();
  }

}
