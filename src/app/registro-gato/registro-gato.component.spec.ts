import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGatoComponent } from './registro-gato.component';

describe('RegistroGatoComponent', () => {
  let component: RegistroGatoComponent;
  let fixture: ComponentFixture<RegistroGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroGatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
