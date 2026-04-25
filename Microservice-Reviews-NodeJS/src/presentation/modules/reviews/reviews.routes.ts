import { Router } from "express";
import { ReviewsController } from "./reviews.controller";

export class ReviewsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ReviewsController();

    /**
     * @openapi
     * /api/reviews/{countReviews}:
     *   get:
     *     summary: Obtener listado de reseñas
     *     description: Retorna una lista de reseñas generadas dinámicamente.
     *     tags:
     *       - Reviews
     *     parameters:
     *       - in: path
     *         name: countReviews
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de reseñas a generar
     *     responses:
     *       200:
     *         description: Lista de reseñas generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Review'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countReviews", controller.getAllReviews);

    return router;
  }
}
