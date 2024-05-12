import { TestBed } from '@angular/core/testing';
import { SearchServiceService } from './search-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

xdescribe('SearchServiceService', () => {
  let service: SearchServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchServiceService]
    });
    service = TestBed.inject(SearchServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  xit('should fetch data from API', () => {

  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding.
  });

});

