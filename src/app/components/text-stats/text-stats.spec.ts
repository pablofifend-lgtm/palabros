import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStats } from './text-stats';

describe('TextStats', () => {
  let component: TextStats;
  let fixture: ComponentFixture<TextStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
