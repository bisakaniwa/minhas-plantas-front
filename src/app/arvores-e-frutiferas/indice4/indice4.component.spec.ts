import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indice4Component } from './indice4.component';

describe('Indice4Component', () => {
  let component: Indice4Component;
  let fixture: ComponentFixture<Indice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Indice4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
