import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAppDetailsComponent } from './movie-app-details.component';

describe('MovieAppDetailsComponent', () => {
  let component: MovieAppDetailsComponent;
  let fixture: ComponentFixture<MovieAppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAppDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
