import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDepaComponent } from './crear-depa.component';

describe('CrearDepaComponent', () => {
  let component: CrearDepaComponent;
  let fixture: ComponentFixture<CrearDepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDepaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
