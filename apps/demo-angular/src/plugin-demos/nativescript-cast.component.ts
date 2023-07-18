import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCast } from '@demo/shared';
import {} from 'nativescript-cast';

@Component({
  selector: 'demo-nativescript-cast',
  templateUrl: 'nativescript-cast.component.html',
})
export class NativescriptCastComponent {
  demoShared: DemoSharedNativescriptCast;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptCast();
  }
}
