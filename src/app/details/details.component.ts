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
export class DetailsComponent implements OnInit, OnDestroy {

  private id: number;
  objects: Stub_object[];
  private sub: any;

  objectIdSnapshot: number;

  constructor(private objectService: ListService, private route: ActivatedRoute, private location: Location) {
    this.objects = objectService.getObjects();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
    });
  }

  ngOnDestroy() {

    this.sub.unsubscribe();
  }
  back() {
    this.location.back();
  }
}
