import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRquest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(private carRepository: ICarsRepository) {}

  async execute({ car_id, specifications_id }: IRquest): Promise<void> {
    const car = await this.carRepository.findById(car_id);

    if (!car) {
      throw new AppError("Car does not exists!");
    }
  }
}

export { CreateCarSpecificationUseCase };
