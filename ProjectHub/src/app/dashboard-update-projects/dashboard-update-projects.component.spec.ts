import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateProjectsComponent } from './dashboard-update-projects.component';

describe('DashboardUpdateProjectsComponent', () => {
  let component: DashboardUpdateProjectsComponent;
  let fixture: ComponentFixture<DashboardUpdateProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUpdateProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
