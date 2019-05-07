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
  add(object: Stub_object): void {
    this.addService.addObject(object)
      .subscribe( object => this.objects.push(object)), this.back();
  }

}
