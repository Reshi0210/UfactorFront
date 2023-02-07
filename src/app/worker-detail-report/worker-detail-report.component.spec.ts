import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDetailReportComponent } from './worker-detail-report.component';

describe('WorkerDetailReportComponent', () => {
  let component: WorkerDetailReportComponent;
  let fixture: ComponentFixture<WorkerDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerDetailReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
