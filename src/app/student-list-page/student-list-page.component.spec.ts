import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StudentListPageComponent } from './student-list-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProductListPageComponent', () => {
  let component: StudentListPageComponent;
  let fixture: ComponentFixture<StudentListPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListPageComponent, HeaderComponent, StudentListComponent],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(StudentListPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('ProductListPageComponent created', () => {
    expect(component).toBeTruthy();
  });

  it('create page-container Html Element', () => {
    fixture.detectChanges();
    const stickyElement = fixture.nativeElement.querySelector('.page-container');
    expect(stickyElement).toBeTruthy();
  });


});
