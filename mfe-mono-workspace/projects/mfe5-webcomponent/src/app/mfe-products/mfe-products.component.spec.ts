import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeProductsComponent } from './mfe-products.component';

describe('MfeProductsComponent', () => {
  let component: MfeProductsComponent;
  let fixture: ComponentFixture<MfeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MfeProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
