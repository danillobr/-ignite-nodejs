import { RentalsRepositopryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let rentalsRepositopryInMemory: RentalsRepositopryInMemory;
let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositopryInMemory = new RentalsRepositopryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositopryInMemory);
  });

  it("should be abe to create a new rental", async () => {
    await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "121212",
      expected_return_date: new Date(),
    });
  });
});
