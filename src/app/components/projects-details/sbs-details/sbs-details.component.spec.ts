import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsDetailsComponent } from './sbs-details.component';

describe('SbsDetailsComponent', () => {
  let component: SbsDetailsComponent;
  let fixture: ComponentFixture<SbsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
