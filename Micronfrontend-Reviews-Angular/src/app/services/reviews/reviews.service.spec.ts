import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReviewsService } from './reviews.service';
import { Review } from '../../interfaces/reviews.interface';

describe('ReviewsService', () => {
  let service: ReviewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReviewsService],
    });
    service = TestBed.inject(ReviewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all reviews from the API', () => {
    const mockReviews: Review[] = [
      {
        id: 1,
        userId: 5,
        productId: 10,
        rating: 5,
        comment: 'Excelente producto',
        date: '2024-04-20',
      },
    ];

    service.getAllReviews(1).subscribe((reviews) => {
      expect(reviews.length).toBe(1);
      expect(reviews[0].rating).toBe(5);
    });

    const req = httpMock.expectOne('http://localhost:3004/api/reviews/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockReviews);
  });

  it('should handle API errors', () => {
    service.getAllReviews(1).subscribe(
      () => fail('should have failed'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne('http://localhost:3004/api/reviews/1');
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});
