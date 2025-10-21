import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoCard } from './veiculo-card';

describe('VeiculoCard', () => {
  let component: VeiculoCard;
  let fixture: ComponentFixture<VeiculoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
