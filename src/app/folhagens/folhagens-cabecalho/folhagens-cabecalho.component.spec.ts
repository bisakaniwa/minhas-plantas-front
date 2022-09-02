import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhagensCabecalhoComponent } from './folhagens-cabecalho.component';

describe('FolhagensCabecalhoComponent', () => {
  let component: FolhagensCabecalhoComponent;
  let fixture: ComponentFixture<FolhagensCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhagensCabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolhagensCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
