import { Component, inject } from '@angular/core';
import { ReviewsTableComponent } from '../../components/reviews-table/reviews-table.component';
import { Review } from '../../interfaces/reviews.interface';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  imports: [ReviewsTableComponent, AlertComponent],
})
export class ReviewsPage {
  reviews: Review[] = [];
  state: State = 'init';
  private reviewsService = inject(ReviewsService);

  ngOnInit(): void {
    this.state = 'loading';
    this.reviewsService.getAllReviews(10).subscribe({
      next: (reviews) => {
        this.reviews = reviews;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
