import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistresComponent } from './sinistres.component';

describe('SinistresComponent', () => {
  let component: SinistresComponent;
  let fixture: ComponentFixture<SinistresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinistresComponent]
    });
    fixture = TestBed.createComponent(SinistresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
