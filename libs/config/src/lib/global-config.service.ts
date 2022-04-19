import { Injectable, InjectionToken, Inject } from '@angular/core';

export const APPDATA = new InjectionToken<string>('appData');
export const ENV = new InjectionToken<string>('environment');

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  constructor(
    @Inject(APPDATA) private appData: any,
    @Inject(ENV) private environment: any
  ) {
  }

  public getData(): string {
    return 'Some_service_data...'
  }

}
