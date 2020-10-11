import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarDepartComponent } from './agregar-editar-depart.component';

describe('AgregarEditarDepartComponent', () => {
  let component: AgregarEditarDepartComponent;
  let fixture: ComponentFixture<AgregarEditarDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
