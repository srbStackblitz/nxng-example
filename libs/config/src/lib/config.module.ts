import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalConfigService, APPDATA, ENV } from './global-config.service';

@NgModule({
  imports: [CommonModule],
})
export class ConfigModule {
  static forRoot(appData: any, environment: any): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        GlobalConfigService,
        { provide: APPDATA , useValue: appData },
        { provide: ENV, useValue: environment },
      ],
    };
  }
}
