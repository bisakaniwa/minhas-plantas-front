import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemIdCabecalhoComponent } from './sem-id-cabecalho.component';

describe('SemIdCabecalhoComponent', () => {
  let component: SemIdCabecalhoComponent;
  let fixture: ComponentFixture<SemIdCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemIdCabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemIdCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
