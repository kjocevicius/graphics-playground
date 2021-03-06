import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrbiterComponent } from './orbiter.component';

describe('OrbiterComponent', () => {
  let component: OrbiterComponent;
  let fixture: ComponentFixture<OrbiterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
