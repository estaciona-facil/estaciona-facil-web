import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosGrid } from './veiculos-grid';

describe('VeiculosGrid', () => {
  let component: VeiculosGrid;
  let fixture: ComponentFixture<VeiculosGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculosGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculosGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
