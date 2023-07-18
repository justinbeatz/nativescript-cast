import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCastComponent } from './nativescript-cast.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCastComponent }])],
  declarations: [NativescriptCastComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCastModule {}
