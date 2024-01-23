import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddiarypageComponent } from './fooddiarypage.component';

describe('FooddiarypageComponent', () => {
  let component: FooddiarypageComponent;
  let fixture: ComponentFixture<FooddiarypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooddiarypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooddiarypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
