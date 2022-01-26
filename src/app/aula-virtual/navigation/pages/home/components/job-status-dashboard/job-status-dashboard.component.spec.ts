import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatusDashboardComponent } from './job-status-dashboard.component';

describe('JobStatusDashboardComponent', () => {
  let component: JobStatusDashboardComponent;
  let fixture: ComponentFixture<JobStatusDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobStatusDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStatusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
