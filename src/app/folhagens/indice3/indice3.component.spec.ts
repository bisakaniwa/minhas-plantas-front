import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indice3Component } from './indice3.component';

describe('Indice3Component', () => {
  let component: Indice3Component;
  let fixture: ComponentFixture<Indice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Indice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
