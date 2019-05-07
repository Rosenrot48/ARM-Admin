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
  isCollapsed: boolean = true;
  isReadonly: boolean = true;

  constructor(private objectService: ListService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {this.getObject(); }

  getObject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.objectService.getObject(id)
      .subscribe(object => this.object = object);
  }
  back() {
    this.location.back();
  }

  save(save): void {
    console.log(save);
  this.objectService.updateObject(this.object)
    .subscribe(() => this.back());
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
