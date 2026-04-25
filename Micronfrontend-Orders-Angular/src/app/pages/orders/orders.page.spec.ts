import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { OrdersPage } from './orders.page';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from '../../interfaces/orders.interface';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersService: jasmine.SpyObj<OrdersService>;

  beforeEach(async () => {
    const ordersServiceSpy = jasmine.createSpyObj('OrdersService', ['getAllOrders']);

    await TestBed.configureTestingModule({
      imports: [OrdersPage],
      providers: [
        { provide: OrdersService, useValue: ordersServiceSpy },
      ],
    }).compileComponents();

    ordersService = TestBed.inject(OrdersService) as jasmine.SpyObj<OrdersService>;
    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load orders on init', () => {
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

    ordersService.getAllOrders.and.returnValue(of(mockOrders));

    component.ngOnInit();

    expect(component.state).toBe('success');
    expect(component.orders.length).toBe(1);
  });

  it('should handle errors on load', () => {
    ordersService.getAllOrders.and.returnValue(throwError(() => new Error('API Error')));

    component.ngOnInit();

    expect(component.state).toBe('error');
  });
});
