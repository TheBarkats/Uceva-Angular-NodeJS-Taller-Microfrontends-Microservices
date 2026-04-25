import { Review } from '../interfaces/reviews.interface';

export const REVIEWS_MOCK: Review[] = [
    {
        id: 1,
        userId: 5,
        productId: 10,
        rating: 5,
        comment: 'Excelente producto, muy recomendado. Llegó en perfecto estado.',
        date: '2024-04-20',
    },
    {
        id: 2,
        userId: 12,
        productId: 15,
        rating: 4,
        comment: 'Buena calidad a precio justo. Satisfecho con la compra.',
        date: '2024-04-19',
    },
];
