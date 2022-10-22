import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEscalaComponent } from './crear-escala.component';

describe('CrearEscalaComponent', () => {
  let component: CrearEscalaComponent;
  let fixture: ComponentFixture<CrearEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
