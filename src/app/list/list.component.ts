import { Component, OnInit } from '@angular/core';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {InMemoryDataService} from '../in-memory-data.service';


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





/*import {Component} from '@angular/core';

/**
 * @title Table with sticky header

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/
