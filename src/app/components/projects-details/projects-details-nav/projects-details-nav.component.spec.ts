import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailsNavComponent } from './projects-details-nav.component';

describe('ProjectsDetailsNavComponent', () => {
  let component: ProjectsDetailsNavComponent;
  let fixture: ComponentFixture<ProjectsDetailsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDetailsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsDetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
