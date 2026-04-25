import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Reviews Microservice API',
      version: '1.0.0',
      description: 'API para gestionar reseñas de productos',
    },
    servers: [
      {
        url: 'http://localhost:3004',
      },
    ],
  },
  apis: [
    './src/presentation/modules/**/*.routes.ts',
    './src/config/swagger.schemas.ts',
  ],
});
