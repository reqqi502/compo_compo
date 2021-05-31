import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauthenticationComponent } from './hauthentication.component';

describe('HauthenticationComponent', () => {
  let component: HauthenticationComponent;
  let fixture: ComponentFixture<HauthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HauthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
