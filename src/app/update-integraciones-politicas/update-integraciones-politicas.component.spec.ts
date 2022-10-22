import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIntegracionesPoliticasComponent } from './update-integraciones-politicas.component';

describe('UpdateIntegracionesPoliticasComponent', () => {
  let component: UpdateIntegracionesPoliticasComponent;
  let fixture: ComponentFixture<UpdateIntegracionesPoliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIntegracionesPoliticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIntegracionesPoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
