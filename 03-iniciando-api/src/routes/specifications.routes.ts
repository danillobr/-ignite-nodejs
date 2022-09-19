import { Router } from "express";

import { createSpecificationController } from "../Modules/cars/useCases/CreateSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
