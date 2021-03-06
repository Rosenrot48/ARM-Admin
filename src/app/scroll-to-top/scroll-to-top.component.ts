import {Component, HostListener, ElementRef} from '@angular/core';
import  {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})

export class ScrollToTopComponent {
  isShow: boolean;
  topPositionToStartShowing = 30;

  @HostListener('window:scroll')
  checkScroll() {

    // window scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases.
    // window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    (scrollPosition >= this.topPositionToStartShowing) ? this.isShow = true : this.isShow = false;
    }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
