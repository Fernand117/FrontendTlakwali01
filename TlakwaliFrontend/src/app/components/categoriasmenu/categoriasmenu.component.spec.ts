import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasmenuComponent } from './categoriasmenu.component';

describe('CategoriasmenuComponent', () => {
  let component: CategoriasmenuComponent;
  let fixture: ComponentFixture<CategoriasmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
