import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ReviewsPage } from './reviews.page';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { Review } from '../../interfaces/reviews.interface';

describe('ReviewsPage', () => {
  let component: ReviewsPage;
  let fixture: ComponentFixture<ReviewsPage>;
  let reviewsService: jasmine.SpyObj<ReviewsService>;

  beforeEach(async () => {
    const reviewsServiceSpy = jasmine.createSpyObj('ReviewsService', ['getAllReviews']);

    await TestBed.configureTestingModule({
      imports: [ReviewsPage],
      providers: [
        { provide: ReviewsService, useValue: reviewsServiceSpy },
      ],
    }).compileComponents();

    reviewsService = TestBed.inject(ReviewsService) as jasmine.SpyObj<ReviewsService>;
    fixture = TestBed.createComponent(ReviewsPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load reviews on init', () => {
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

    reviewsService.getAllReviews.and.returnValue(of(mockReviews));

    component.ngOnInit();

    expect(component.state).toBe('success');
    expect(component.reviews.length).toBe(1);
  });

  it('should handle errors on load', () => {
    reviewsService.getAllReviews.and.returnValue(throwError(() => new Error('API Error')));

    component.ngOnInit();

    expect(component.state).toBe('error');
  });
});
