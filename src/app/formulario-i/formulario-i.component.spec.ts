import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIComponent } from './formulario-i.component';

describe('FormularioIComponent', () => {
  let component: FormularioIComponent;
  let fixture: ComponentFixture<FormularioIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
