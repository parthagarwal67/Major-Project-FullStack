import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewProjectsComponent } from './dashboard-view-projects.component';

describe('DashboardViewProjectsComponent', () => {
  let component: DashboardViewProjectsComponent;
  let fixture: ComponentFixture<DashboardViewProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
