import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelProprietario } from './painel-proprietario';

describe('PainelProprietario', () => {
  let component: PainelProprietario;
  let fixture: ComponentFixture<PainelProprietario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelProprietario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelProprietario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
