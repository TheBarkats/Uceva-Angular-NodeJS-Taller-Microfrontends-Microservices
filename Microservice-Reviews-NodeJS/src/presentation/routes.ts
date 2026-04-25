import { Router } from "express";
import { ReviewsRoutes } from "./modules/reviews/reviews.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/reviews", ReviewsRoutes.routes);
    return router;
  }
}
