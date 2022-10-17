import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepaComponent } from './update-depa.component';

describe('UpdateDepaComponent', () => {
  let component: UpdateDepaComponent;
  let fixture: ComponentFixture<UpdateDepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDepaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
