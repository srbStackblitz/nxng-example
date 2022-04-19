import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from '../environments/environment';

import { qqqConfigData } from './qqq-config-data';
import { ConfigModule } from '@nxng/config';

import { NxWelcomeComponent } from './nx-welcome.component';
import { NxModule } from '@nrwl/angular';

import { QqqComponent } from './qqq.component';

@NgModule({
  declarations: [QqqComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    ConfigModule.forRoot(qqqConfigData, environment)
  ],
  providers: [DatePipe,
  ],
  bootstrap: [QqqComponent]
})
export class QqqModule {}
