import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEscalaComponent } from './update-escala.component';

describe('UpdateEscalaComponent', () => {
  let component: UpdateEscalaComponent;
  let fixture: ComponentFixture<UpdateEscalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEscalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEscalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
