import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersTableComponent } from './orders-table.component';
import { Order } from '../../interfaces/orders.interface';

describe('OrdersTableComponent', () => {
  let component: OrdersTableComponent;
  let fixture: ComponentFixture<OrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display orders in table', () => {
    const mockOrders: Order[] = [
      {
        id: 1,
        orderNumber: 'ORD-001',
        customerName: 'Juan',
        totalPrice: 150000,
        status: 'Completed',
        createdDate: '2026-04-10',
        itemsCount: 3,
      },
    ];

    component.orders = mockOrders;
    fixture.detectChanges();

    expect(component.orders.length).toBe(1);
    expect(component.orders[0].orderNumber).toBe('ORD-001');
  });

  it('should have correct status mapping', () => {
    expect(component.statusMap['Completed']).toBe('success');
    expect(component.statusMap['Processing']).toBe('primary');
    expect(component.statusMap['Pending']).toBe('warning');
    expect(component.statusMap['Cancelled']).toBe('danger');
  });
});
