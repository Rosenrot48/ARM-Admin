import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ListService]
})
export class DetailsComponent implements OnInit {

  @Input() object: Stub_object;
  objects: Stub_object[];
  isCollapsed = true;
  isReadonly: boolean;

  constructor(private objectService: ListService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.isReadonly = true;
    this.getObject(); }

  getObject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.objectService.getObject(id)
      .subscribe(object => this.object = object);
  }
  back() {
    this.location.back();
  }

  save(saves): void {
  this.objectService.updateObject(this.object)
    .subscribe(() => this.toggleReadonly('save'));
  }

  delete(object: Stub_object): void {
    this.objectService.deleteObject(object.id).subscribe(() => this.back());
  }
  toggleReadonly(pusher) {
    console.log(pusher);
    this.isReadonly = !this.isReadonly;
    this.isCollapsed = !this.isCollapsed;

  }
}
