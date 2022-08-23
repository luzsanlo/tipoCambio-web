import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMonedaComponent } from './create-moneda.component';

describe('CreateMonedaComponent', () => {
  let component: CreateMonedaComponent;
  let fixture: ComponentFixture<CreateMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMonedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
