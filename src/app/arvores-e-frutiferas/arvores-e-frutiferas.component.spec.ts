import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoresEFrutiferasComponent } from './arvores-e-frutiferas.component';

describe('ArvoresEFrutiferasComponent', () => {
  let component: ArvoresEFrutiferasComponent;
  let fixture: ComponentFixture<ArvoresEFrutiferasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoresEFrutiferasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArvoresEFrutiferasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
