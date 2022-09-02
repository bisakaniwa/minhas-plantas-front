import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoresCabecalhoComponent } from './arvores-cabecalho.component';

describe('ArvoresCabecalhoComponent', () => {
  let component: ArvoresCabecalhoComponent;
  let fixture: ComponentFixture<ArvoresCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoresCabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArvoresCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
