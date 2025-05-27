import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDuenoComponent } from './registro-dueno.component';

describe('RegistroDuenoComponent', () => {
  let component: RegistroDuenoComponent;
  let fixture: ComponentFixture<RegistroDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDuenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
