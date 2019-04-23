import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyserviceComponent } from './companyservice.component';

describe('CompanyserviceComponent', () => {
  let component: CompanyserviceComponent;
  let fixture: ComponentFixture<CompanyserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
