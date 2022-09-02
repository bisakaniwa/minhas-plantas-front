import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoSuculentasComponent } from './cabecalho-suculentas.component';

describe('CabecalhoSuculentasComponent', () => {
  let component: CabecalhoSuculentasComponent;
  let fixture: ComponentFixture<CabecalhoSuculentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoSuculentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabecalhoSuculentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
