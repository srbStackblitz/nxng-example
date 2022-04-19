import { Component } from '@angular/core';
import { GlobalConfigService } from '@nxng/config';

@Component({
  selector: 'qqq-root',
  templateUrl: './qqq.component.html',
  styleUrls: ['./qqq.component.scss'],
})
export class QqqComponent {
  title = 'qqq';
  constructor(
    private configService: GlobalConfigService,

  ) {
    this.doSomething();
  }

  private doSomething(): void {
      this.title = this.configService.getData();
  }

}
