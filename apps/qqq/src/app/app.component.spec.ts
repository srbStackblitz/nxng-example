import { TestBed } from '@angular/core/testing';
import { QqqComponent } from './qqq.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QqqComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QqqComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'qqq'`, () => {
    const fixture = TestBed.createComponent(QqqComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('qqq');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(QqqComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome qqq');
  });
});
