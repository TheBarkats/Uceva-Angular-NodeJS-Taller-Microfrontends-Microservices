/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - orderNumber
 *         - customerName
 *         - totalPrice
 *         - status
 *         - createdDate
 *         - itemsCount
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         orderNumber:
 *           type: string
 *           example: ORD-001
 *         customerName:
 *           type: string
 *           example: Juan Pérez
 *         totalPrice:
 *           type: number
 *           example: 150000
 *         status:
 *           type: string
 *           enum:
 *             - Pending
 *             - Processing
 *             - Completed
 *             - Cancelled
 *           example: Completed
 *         createdDate:
 *           type: string
 *           format: date-time
 *           example: 2026-04-10T08:00:00.000Z
 *         itemsCount:
 *           type: number
 *           example: 3
 */
export {};
