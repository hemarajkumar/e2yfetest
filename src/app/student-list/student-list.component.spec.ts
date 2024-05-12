import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentListComponent } from './student-list.component';

import { SearchServiceService } from '../shared/service/search-service.service';

xdescribe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;
  let service: SearchServiceService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListComponent],
      providers: [SearchServiceService]
    }).compileComponents()
      .then(() => {
        service = TestBed.inject(SearchServiceService);
        fixture = TestBed.createComponent(StudentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have myVariable', () => {

    expect(component.searchLists).toBeDefined();
    expect(typeof component.searchLists).toBe('object');

    expect(component.filterLists).toBeDefined();
    expect(typeof component.filterLists).toBe('object');

    expect(component.defaultLists).toBeDefined();
    expect(typeof component.defaultLists).toBe('object');

    expect(typeof component.searchLists).toBe('object');
    expect( component.studentList$).toBeUndefined();

    expect(component.noImage).toEqual('assets/imagenotfound.png');
   });

  it('should subscribe to data service', () => {
    expect(SearchServiceService).toHaveBeenCalled();
  });
});