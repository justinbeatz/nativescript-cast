import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCast } from '@demo/shared';
// import {  } from 'nativescript-cast';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptCast {}
