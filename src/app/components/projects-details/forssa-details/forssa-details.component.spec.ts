import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForssaDetailsComponent } from './forssa-details.component';

describe('ForssaDetailsComponent', () => {
  let component: ForssaDetailsComponent;
  let fixture: ComponentFixture<ForssaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForssaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForssaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
