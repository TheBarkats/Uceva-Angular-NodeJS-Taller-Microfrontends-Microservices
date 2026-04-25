import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom } from '@brejcha13320/design-system-bootstrap';
import { Review } from '../../interfaces/reviews.interface';

@Component({
  selector: 'app-reviews-table',
  templateUrl: './reviews-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ReviewsTableComponent {
  @Input() reviews: Review[] = [];
  
  getRatingColor(rating: number): 'success' | 'warning' | 'danger' {
    if (rating >= 4) return 'success';
    if (rating >= 3) return 'warning';
    return 'danger';
  }
}
