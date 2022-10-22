import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIntegracionesPoliticasComponent } from './crear-integraciones-politicas.component';

describe('CrearIntegracionesPoliticasComponent', () => {
  let component: CrearIntegracionesPoliticasComponent;
  let fixture: ComponentFixture<CrearIntegracionesPoliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearIntegracionesPoliticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearIntegracionesPoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
