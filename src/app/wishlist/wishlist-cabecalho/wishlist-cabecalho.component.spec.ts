import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCabecalhoComponent } from './wishlist-cabecalho.component';

describe('WishlistCabecalhoComponent', () => {
  let component: WishlistCabecalhoComponent;
  let fixture: ComponentFixture<WishlistCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistCabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
