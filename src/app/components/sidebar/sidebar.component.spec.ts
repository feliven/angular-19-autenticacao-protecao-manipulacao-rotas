// TypeScript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';

@Component({ template: '<app-sidebar></app-sidebar>' })
class TestHostComponent {}

describe('SidebarComponent', () => {
  let fixture: ComponentFixture<SidebarComponent>;
  let component: SidebarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-sidebar selector inside a host component', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();
    const el = hostFixture.debugElement.query(By.css('app-sidebar'));
    expect(el).toBeTruthy();
  });

  it('should not throw during change detection', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
