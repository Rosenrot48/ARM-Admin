import { Component, OnInit } from '@angular/core';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {InMemoryDataService} from '../in-memory-data.service';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/table';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  objects: Stub_object[];
  selectedObject: Stub_object;
  displayedColumns = ['id', 'name', 'code'];
  dataSource = new ObjectDataSource(this.listService);
  constructor(private listService: ListService, private location: Location) { }



 ngOnInit() {
  this.getObjects();
 }



 getObjects(): void {
    this.listService.getObjects()
      .subscribe(objects => this.objects = objects);
 }
  onSelect(object: Stub_object): void {
    this.selectedObject = object;
  }
  back() {
    this.location.back();
  }
  add(object: Stub_object): void {
    this.listService.addObject(object)
      .subscribe( object => this.objects.push(object));
  }

}
export class ObjectDataSource extends DataSource<any> {
  constructor(private listService: ListService) {
    super();
  }
  connect(): Observable<Stub_object[]> {
    return this.listService.getObjects();
  }
  disconnect(): void {
  }
}

