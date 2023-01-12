<<<<<<< HEAD
import { request, Request, Response } from "express";
import { container } from "tsyringe";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
=======
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { request, Request, Response } from "express";
import { container } from "tsyringe";
import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

class ListRentalsByUserController {
  async handle(rquest: Request, response: Response): Promise<Response> {
>>>>>>> ddbe17f9186ae22a41bd07e75f67972013962ac4
    const { id } = request.user;
    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUseCase
    );

    const rentals = await listRentalsByUserUseCase.execute(id);
    return response.status(200).json(rentals);
  }
}

export { ListRentalsByUserController };
