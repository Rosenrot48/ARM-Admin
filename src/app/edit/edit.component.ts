import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ListService]
})
export class EditComponent implements OnInit {
  @Input() object: Stub_object;

  constructor(private objectService: ListService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() { this.getObject();
  }

  back() {
    this.location.back();
  }
  getObject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.objectService.getObject(id)
      .subscribe(object => this.object = object);
  }
}
