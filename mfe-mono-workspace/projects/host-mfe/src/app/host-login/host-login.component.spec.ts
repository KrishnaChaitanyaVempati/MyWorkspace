import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLoginComponent } from './host-login.component';

describe('HostLoginComponent', () => {
  let component: HostLoginComponent;
  let fixture: ComponentFixture<HostLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
