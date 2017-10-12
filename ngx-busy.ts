import { ISubscription } from 'rxjs/Subscription';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-busy',
  template: `
  <div *ngIf="shownSpinner()">
    <div class="ng-busy-backdrop"></div>
    <div class="ng-busy-default-wrapper">
      <div class="ng-busy-default-sign">
        <div class="ng-busy-default-spinner">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
        </div>
        <div class="ng-busy-default-text">Please wait...</div>
      </div>
    </div>
  </div>

  `,
  styles: [`

  .ng-busy-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    background: #fff;
    opacity: .7;
  }
  .ng-busy-default-wrapper {
    text-align: center;
  }
  .ng-busy-default-sign {
    position: relative;
    display: inline-block;
    z-index: 1003;
    padding: 12px 14px;
    border: 1px solid #d8d8d8;
    border-top: 0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    background: #f8f8f8;
    color: #333;
  }
  .ng-busy-default-text {
    display: inline-block;
    margin-left: 6px;
    max-width: 400px;
    font-size: 14px;
    text-align: left;
  }
  .ng-busy-default-spinner {
    position: relative;
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
  .ng-busy-default-spinner div {
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 10%;
    height: 26%;
    background: #666;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    opacity: 0;
    -webkit-animation: busy-spinner-anim 1s linear infinite;
    animation: busy-spinner-anim 1s linear infinite;
  }
  .ng-busy-default-spinner .bar1 {
    -webkit-transform: rotate(0deg) translate(0, -142%);
    transform: rotate(0deg) translate(0, -142%);
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }
  .ng-busy-default-spinner .bar2 {
    -webkit-transform: rotate(30deg) translate(0, -142%);
    transform: rotate(30deg) translate(0, -142%);
    -webkit-animation-delay: -0.91666667s;
    animation-delay: -0.91666667s;
  }
  .ng-busy-default-spinner .bar3 {
    -webkit-transform: rotate(60deg) translate(0, -142%);
    transform: rotate(60deg) translate(0, -142%);
    -webkit-animation-delay: -0.83333333s;
    animation-delay: -0.83333333s;
  }
  .ng-busy-default-spinner .bar4 {
    -webkit-transform: rotate(90deg) translate(0, -142%);
    transform: rotate(90deg) translate(0, -142%);
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
  }
  .ng-busy-default-spinner .bar5 {
    -webkit-transform: rotate(120deg) translate(0, -142%);
    transform: rotate(120deg) translate(0, -142%);
    -webkit-animation-delay: -0.66666667s;
    animation-delay: -0.66666667s;
  }
  .ng-busy-default-spinner .bar6 {
    -webkit-transform: rotate(150deg) translate(0, -142%);
    transform: rotate(150deg) translate(0, -142%);
    -webkit-animation-delay: -0.58333333s;
    animation-delay: -0.58333333s;
  }
  .ng-busy-default-spinner .bar7 {
    -webkit-transform: rotate(180deg) translate(0, -142%);
    transform: rotate(180deg) translate(0, -142%);
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  .ng-busy-default-spinner .bar8 {
    -webkit-transform: rotate(210deg) translate(0, -142%);
    transform: rotate(210deg) translate(0, -142%);
    -webkit-animation-delay: -0.41666667s;
    animation-delay: -0.41666667s;
  }
  .ng-busy-default-spinner .bar9 {
    -webkit-transform: rotate(240deg) translate(0, -142%);
    transform: rotate(240deg) translate(0, -142%);
    -webkit-animation-delay: -0.33333333s;
    animation-delay: -0.33333333s;
  }
  .ng-busy-default-spinner .bar10 {
    -webkit-transform: rotate(270deg) translate(0, -142%);
    transform: rotate(270deg) translate(0, -142%);
    -webkit-animation-delay: -0.25s;
    animation-delay: -0.25s;
  }
  .ng-busy-default-spinner .bar11 {
    -webkit-transform: rotate(300deg) translate(0, -142%);
    transform: rotate(300deg) translate(0, -142%);
    -webkit-animation-delay: -0.16666667s;
    animation-delay: -0.16666667s;
  }
  .ng-busy-default-spinner .bar12 {
    -webkit-transform: rotate(330deg) translate(0, -142%);
    transform: rotate(330deg) translate(0, -142%);
    -webkit-animation-delay: -0.08333333s;
    animation-delay: -0.08333333s;
  }
  @-webkit-keyframes busy-spinner-anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
  @keyframes busy-spinner-anim {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }

  `]
})

export class BusyComponent {

  @Input() busy: ISubscription;

  constructor() { }

  shownSpinner() {
    return this.isSubscriptionDefined() && this.isSubscriptionOpen();
  }


  isSubscriptionOpen() {
    return this.busy.closed === false;
  }


  isSubscriptionDefined() {
    return typeof this.busy !== 'undefined';
  }
}

