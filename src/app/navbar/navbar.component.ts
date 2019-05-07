import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {Stub_object} from '../stub_object';
import {ListService} from '../list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  objects$: Observable<Stub_object[]>;
  private searchTerms = new Subject<string>();

  constructor(private translate: TranslateService, private searchService: ListService) { }

  search(term: string): void {
    this.searchTerms.next(term);

  }

  ngOnInit() {
    this.objects$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchService.searchObjects(term)),
    );
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
