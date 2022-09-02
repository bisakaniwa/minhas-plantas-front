import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemIdComponent } from './sem-id.component';

describe('SemIdComponent', () => {
  let component: SemIdComponent;
  let fixture: ComponentFixture<SemIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
