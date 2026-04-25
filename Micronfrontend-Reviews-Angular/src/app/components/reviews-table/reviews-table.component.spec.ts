import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewsTableComponent } from './reviews-table.component';
import { Review } from '../../interfaces/reviews.interface';

describe('ReviewsTableComponent', () => {
  let component: ReviewsTableComponent;
  let fixture: ComponentFixture<ReviewsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display reviews in table', () => {
    const mockReviews: Review[] = [
      {
        id: 1,
        userId: 5,
        productId: 10,
        rating: 5,
        comment: 'Excelente',
        date: '2024-04-20',
      },
    ];

    component.reviews = mockReviews;
    fixture.detectChanges();

    expect(component.reviews.length).toBe(1);
    expect(component.reviews[0].rating).toBe(5);
  });

  it('should return correct rating color', () => {
    expect(component.getRatingColor(5)).toBe('success');
    expect(component.getRatingColor(4)).toBe('success');
    expect(component.getRatingColor(3)).toBe('warning');
    expect(component.getRatingColor(2)).toBe('danger');
    expect(component.getRatingColor(1)).toBe('danger');
  });
});
