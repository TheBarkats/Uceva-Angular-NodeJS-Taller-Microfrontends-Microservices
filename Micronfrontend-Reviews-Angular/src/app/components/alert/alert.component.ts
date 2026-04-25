import { Component, Input } from '@angular/core';
import { AlertState } from '../../interfaces/state.interface';
import { IconAtom } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  imports: [IconAtom],
})
export class AlertComponent {
  @Input({ required: true }) alertState!: AlertState;
  @Input() text: string = '';

  alertClassMap: Record<AlertState, 'primary' | 'danger'> = {
    error: 'danger',
    loading: 'primary',
  };

  getClass(): string {
    return `alert alert-${this.alertClassMap[this.alertState]} d-flex align-items-center`;
  }
}
