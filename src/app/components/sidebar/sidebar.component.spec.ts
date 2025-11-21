import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';

@Component({
  template: '<app-sidebar></app-sidebar>',
  standalone: true,
  imports: [SidebarComponent],
})
class TestHostComponent {}

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [TestHostComponent],
  });
});

describe('SidebarComponent', () => {
  let fixture: ComponentFixture<SidebarComponent>;
  let component: SidebarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidebarComponent, TestHostComponent],
    });
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

  it('should initialize without errors', () => {
    expect(component).toBeInstanceOf(SidebarComponent);
  });

  // it('should have no inputs or outputs by default', () => {
  //   const inputs = Object.keys(component).filter((key) => key.startsWith('_'));
  //   expect(inputs.length).toBe(0);
  // });

  it('should render within host component without errors', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    expect(() => hostFixture.detectChanges()).not.toThrow();
  });

  it('should maintain component state after multiple change detections', () => {
    fixture.detectChanges();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
