import { injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
}

@injectable()
class CreateCarUseCase {
  async execute({}): Promise<void> {}
}

export { CreateCarUseCase };
