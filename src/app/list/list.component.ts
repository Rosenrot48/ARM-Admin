import { Component, OnInit } from '@angular/core';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  objects: Stub_object[];
  selectedObject: Stub_object;
  constructor(private listService: ListService, private location: Location) { }

 ngOnInit() {
  this.getObjects();
 }
 getObjects(): void {
    this.objects = this.listService.getObjects();
 }
  onSelect(object: Stub_object): void {
    this.selectedObject = object;
  }
  back() {
    this.location.back();
  }
}




