import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indice1Component } from './indice1.component';

describe('Indice1Component', () => {
  let component: Indice1Component;
  let fixture: ComponentFixture<Indice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Indice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
