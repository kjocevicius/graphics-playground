import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsDemoComponent } from './planets-demo.component';

describe('PlanetsDemoComponent', () => {
  let component: PlanetsDemoComponent;
  let fixture: ComponentFixture<PlanetsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
