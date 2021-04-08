import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbarhomepageComponent } from './nvbarhomepage.component';

describe('NvbarhomepageComponent', () => {
  let component: NvbarhomepageComponent;
  let fixture: ComponentFixture<NvbarhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvbarhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvbarhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
