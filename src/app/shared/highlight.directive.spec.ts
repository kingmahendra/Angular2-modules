import { HighlightDirective } from './highlight.directive';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import {By} from "@angular/platform-browser";

@Component( {
  template: `<h1 highlight> Test Title</h1>`
 })
class TestDirectiveComponent{}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestDirectiveComponent>;
  let component: TestDirectiveComponent;
  let element: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HighlightDirective, TestDirectiveComponent]
    });
    fixture = TestBed.createComponent(TestDirectiveComponent);
    element = fixture.debugElement.query(By.css('h1'));
  })
 
  it('should highlight the backgroud color in gold', () => {
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toBe('gold');
  });
});
