import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciesSuculentasComponent } from './especies-suculentas.component';

describe('EspeciesSuculentasComponent', () => {
  let component: EspeciesSuculentasComponent;
  let fixture: ComponentFixture<EspeciesSuculentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspeciesSuculentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspeciesSuculentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
