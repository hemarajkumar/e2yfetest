import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('HeaderComponent created', () => {
    expect(component).toBeTruthy();
  });

  it('create sticky Nav Html Element', () => {
    fixture.detectChanges();
    const stickyElement = fixture.nativeElement.querySelector('.sticky-nav');
    expect(stickyElement).toBeTruthy();
  });

});
