import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdulistComponent } from './produlist.component';

describe('ProdulistComponent', () => {
  let component: ProdulistComponent;
  let fixture: ComponentFixture<ProdulistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdulistComponent]
    });
    fixture = TestBed.createComponent(ProdulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
