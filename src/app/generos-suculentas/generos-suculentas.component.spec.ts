import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosSuculentasComponent } from './generos-suculentas.component';

describe('GenerosSuculentasComponent', () => {
  let component: GenerosSuculentasComponent;
  let fixture: ComponentFixture<GenerosSuculentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosSuculentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosSuculentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
