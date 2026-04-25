import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdersService } from './orders.service';
import { Order } from '../../interfaces/orders.interface';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService],
    });
    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all orders from the API', () => {
    const mockOrders: Order[] = [
      {
        id: 1,
        orderNumber: 'ORD-001',
        customerName: 'Juan Pérez',
        totalPrice: 150000,
        status: 'Completed',
        createdDate: '2026-04-10T08:00:00.000Z',
        itemsCount: 3,
      },
    ];

    service.getAllOrders(1).subscribe((orders) => {
      expect(orders.length).toBe(1);
      expect(orders[0].orderNumber).toBe('ORD-001');
    });

    const req = httpMock.expectOne('http://localhost:3003/api/orders/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockOrders);
  });

  it('should handle API errors', () => {
    service.getAllOrders(1).subscribe(
      () => fail('should have failed'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne('http://localhost:3003/api/orders/1');
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});
