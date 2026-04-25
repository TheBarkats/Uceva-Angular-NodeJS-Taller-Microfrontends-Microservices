/**
 * @openapi
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       description: Representa una reseña de un producto
 *       required:
 *         - id
 *         - userId
 *         - productId
 *         - rating
 *         - comment
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         userId:
 *           type: number
 *           example: 5
 *         productId:
 *           type: number
 *           example: 10
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           example: 5
 *         comment:
 *           type: string
 *           example: Excelente producto, muy recomendado. Llegó en perfecto estado.
 *         date:
 *           type: string
 *           format: date
 *           example: 2024-04-20
 */
export {};
