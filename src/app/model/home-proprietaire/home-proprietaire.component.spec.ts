import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProprietaireComponent } from './home-proprietaire.component';

describe('HomeProprietaireComponent', () => {
  let component: HomeProprietaireComponent;
  let fixture: ComponentFixture<HomeProprietaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProprietaireComponent]
    });
    fixture = TestBed.createComponent(HomeProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
