import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedeValeurComponent } from './unitede-valeur.component';

describe('UnitedeValeurComponent', () => {
  let component: UnitedeValeurComponent;
  let fixture: ComponentFixture<UnitedeValeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedeValeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedeValeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
