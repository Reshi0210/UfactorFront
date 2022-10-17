import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaridadComponent } from './escolaridad.component';

describe('EscolaridadComponent', () => {
  let component: EscolaridadComponent;
  let fixture: ComponentFixture<EscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolaridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
