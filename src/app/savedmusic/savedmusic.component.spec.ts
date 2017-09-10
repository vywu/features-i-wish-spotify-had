import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedmusicComponent } from './savedmusic.component';

describe('SavedmusicComponent', () => {
  let component: SavedmusicComponent;
  let fixture: ComponentFixture<SavedmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
