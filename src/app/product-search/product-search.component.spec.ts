import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductSearchComponent } from './product-search.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, FormsModule, MatInputModule],
      declarations: [ProductSearchComponent],
      providers: [
        provideAnimations()
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProductSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }));

  it('ProductSearchComponent created', () => {
    expect(component).toBeTruthy();
  });

  it('Search Bar created', () => {
    fixture.detectChanges();
    const searchBar = fixture.nativeElement.querySelector('.search-bar');
    expect(searchBar).toBeTruthy();
  });

  it('Sorting dropdown created', () => {
    fixture.detectChanges();
    const sortingList = fixture.nativeElement.querySelector('.sort-student-list');
    expect(sortingList).toBeTruthy();
  });


});
