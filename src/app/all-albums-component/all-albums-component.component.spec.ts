import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlbumsComponentComponent } from './all-albums-component.component';

describe('AllAlbumsComponentComponent', () => {
  let component: AllAlbumsComponentComponent;
  let fixture: ComponentFixture<AllAlbumsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAlbumsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllAlbumsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
