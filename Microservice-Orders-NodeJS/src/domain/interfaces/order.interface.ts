export interface Order {
    id: number;
    orderNumber: string;
    customerName: string;
    totalPrice: number;
    status: OrderStatus;
    createdDate: string;
    itemsCount: number;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Completed' | 'Cancelled';
