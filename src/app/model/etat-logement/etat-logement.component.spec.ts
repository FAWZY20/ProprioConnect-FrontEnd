import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatLogementComponent } from './etat-logement.component';

describe('EtatLogementComponent', () => {
  let component: EtatLogementComponent;
  let fixture: ComponentFixture<EtatLogementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtatLogementComponent]
    });
    fixture = TestBed.createComponent(EtatLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
