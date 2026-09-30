import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherInfo } from './other-info';

describe('OtherInfo', () => {
  let component: OtherInfo;
  let fixture: ComponentFixture<OtherInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
