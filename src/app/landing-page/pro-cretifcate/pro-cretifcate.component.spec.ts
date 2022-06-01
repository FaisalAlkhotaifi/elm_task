import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCretifcateComponent } from './pro-cretifcate.component';

describe('ProCretifcateComponent', () => {
  let component: ProCretifcateComponent;
  let fixture: ComponentFixture<ProCretifcateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCretifcateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProCretifcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
