import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEscolaridadComponent } from './crear-escolaridad.component';

describe('CrearEscolaridadComponent', () => {
  let component: CrearEscolaridadComponent;
  let fixture: ComponentFixture<CrearEscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEscolaridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
