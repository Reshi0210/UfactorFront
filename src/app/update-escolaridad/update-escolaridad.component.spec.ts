import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEscolaridadComponent } from './update-escolaridad.component';

describe('UpdateEscolaridadComponent', () => {
  let component: UpdateEscolaridadComponent;
  let fixture: ComponentFixture<UpdateEscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEscolaridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
