import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDepartComponent } from './ver-depart.component';

describe('VerDepartComponent', () => {
  let component: VerDepartComponent;
  let fixture: ComponentFixture<VerDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
