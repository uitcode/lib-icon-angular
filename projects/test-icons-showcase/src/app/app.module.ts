// import { iconAlarm, iconEmail } from './../../../test-icons/src/lib/icons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { iconAlarm, iconEmail } from 'projects/test-icons/icons';
import {
  iconAlarm,
  iconEmail,
  IconsService,
  TestIconsModule
} from 'projects/test-icons/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TestIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconRegistry: IconsService) {
    this.iconRegistry.registerIcons([iconEmail, iconAlarm]);
  }
}
