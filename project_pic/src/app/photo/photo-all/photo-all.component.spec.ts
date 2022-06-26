import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAllComponent } from './photo-all.component';

describe('PhotoAllComponent', () => {
  let component: PhotoAllComponent;
  let fixture: ComponentFixture<PhotoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
