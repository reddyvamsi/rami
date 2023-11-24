import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployelistComponent } from './createemployelist.component';

describe('CreateemployelistComponent', () => {
  let component: CreateemployelistComponent;
  let fixture: ComponentFixture<CreateemployelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateemployelistComponent]
    });
    fixture = TestBed.createComponent(CreateemployelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
