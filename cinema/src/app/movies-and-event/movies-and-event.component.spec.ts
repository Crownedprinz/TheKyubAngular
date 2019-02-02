import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAndEventComponent } from './movies-and-event.component';

describe('MoviesAndEventComponent', () => {
  let component: MoviesAndEventComponent;
  let fixture: ComponentFixture<MoviesAndEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesAndEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesAndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
