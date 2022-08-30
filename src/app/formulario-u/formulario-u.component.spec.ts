import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUComponent } from './formulario-u.component';

describe('FormularioUComponent', () => {
  let component: FormularioUComponent;
  let fixture: ComponentFixture<FormularioUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
