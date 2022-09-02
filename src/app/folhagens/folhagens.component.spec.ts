import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhagensComponent } from './folhagens.component';

describe('FolhagensComponent', () => {
  let component: FolhagensComponent;
  let fixture: ComponentFixture<FolhagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolhagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
