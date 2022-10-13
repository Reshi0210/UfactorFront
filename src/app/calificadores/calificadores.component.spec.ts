import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificadoresComponent } from './calificadores.component';

describe('CalificadoresComponent', () => {
  let component: CalificadoresComponent;
  let fixture: ComponentFixture<CalificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
