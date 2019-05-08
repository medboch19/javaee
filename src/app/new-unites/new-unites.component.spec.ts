import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUnitesComponent } from './new-unites.component';

describe('NewDossierComponent', () => {
  let component: NewUnitesComponent;
  let fixture: ComponentFixture<NewUnitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUnitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUnitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
