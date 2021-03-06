import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDemoComponent } from './empty-demo.component';

describe('EmptyDemoComponent', () => {
  let component: EmptyDemoComponent;
  let fixture: ComponentFixture<EmptyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
