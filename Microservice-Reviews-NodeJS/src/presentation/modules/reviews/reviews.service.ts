import { faker } from '@faker-js/faker';
import { Review } from '../../../domain/interfaces/review.interface';

export class ReviewsService {
  private comments: string[] = [
    'Excelente producto, muy recomendado. Llegó en perfecto estado.',
    'Buena calidad a precio justo. Satisfecho con la compra.',
    'No me impresionó mucho. Esperaba más por el precio.',
    'Producto defectuoso. Fue reemplazado rápidamente.',
    'Entrega rápida y producto en excelentes condiciones.',
    'La mejor compra que he hecho. Volveré a comprar.',
    'Producto promedio. Nada de especial.',
    'Muy satisfecho. Lo vuelvo a comprar sin dudarlo.',
    'Llego dañado, pero el servicio al cliente fue excepcional.',
    'Recomendado 100%. Producto de calidad garantizada.'
  ];

  public async getAllReviews(countReviews: number): Promise<Review[]> {
    const reviews: Promise<Review>[] = [];

    for (let i = 1; i <= countReviews; i++) {
      reviews.push(this.generateReview(i));
    }

    return Promise.all(reviews);
  }

  private generateReview(id: number): Promise<Review> {
    return Promise.resolve({
      id,
      userId: faker.number.int({ min: 1, max: 100 }),
      productId: faker.number.int({ min: 1, max: 50 }),
      rating: faker.number.int({ min: 1, max: 5 }),
      comment: faker.helpers.arrayElement(this.comments),
      date: faker.date.past({ years: 1 }).toISOString().split('T')[0],
    });
  }
}
