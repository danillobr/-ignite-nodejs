import dayjs from "dayjs";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { RentalsRepositopryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

let rentalsRepositopryInMemory: RentalsRepositopryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;
let dayjsDateProvider: DayjsDateProvider;
let userRepositoryInMemory: UsersRepositoryInMemory;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositopryInMemory = new RentalsRepositopryInMemory();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositopryInMemory,
      dayjsDateProvider,
      carsRepositoryInMemory
    );
    userRepositoryInMemory = new UsersRepositoryInMemory();
  });

  it("should be abe to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "brand",
      category_id: "1234",
      daily_rate: 100,
      description: "Car teste",
      fine_amount: 40,
      license_plate: "license Test",
      name: "Test",
    });

    const rental = await createRentalUseCase.execute({
      user_id: "12345",
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to the same user", async () => {
    const user = await userRepositoryInMemory.create({
      driver_license: "1234",
      email: "test@email",
      name: "user",
      password: "password123",
    });

    const car1 = await carsRepositoryInMemory.create({
      brand: "brand",
      category_id: "1234",
      daily_rate: 100,
      description: "Car 01 teste",
      fine_amount: 40,
      license_plate: "license Test car 01",
      name: "Test 01",
    });

    const car2 = await carsRepositoryInMemory.create({
      brand: "brand",
      category_id: "1234",
      daily_rate: 100,
      description: "Car 02 teste",
      fine_amount: 40,
      license_plate: "license Test car 02",
      name: "Test 02",
    });

    await createRentalUseCase.execute({
      user_id: user.id,
      car_id: car1.id,
      expected_return_date: dayAdd24Hours,
    });

    await expect(
      await createRentalUseCase.execute({
        user_id: user.id,
        car_id: car2.id,
        expected_return_date: dayAdd24Hours,
      })
    ).rejects.toEqual(new AppError("There's a rental in progress for user!"));
  });

  it("should not be abe to create a new rental if there is another open to the same car", async () => {
    const user1 = await userRepositoryInMemory.create({
      driver_license: "12345",
      email: "test1@email",
      name: "user 01",
      password: "password123",
    });

    const user2 = await userRepositoryInMemory.create({
      driver_license: "1234566",
      email: "test02@email",
      name: "user 02",
      password: "password123",
    });

    const car = await carsRepositoryInMemory.create({
      brand: "brand",
      category_id: "1234",
      daily_rate: 100,
      description: "Car teste",
      fine_amount: 40,
      license_plate: "license Test",
      name: "Test",
    });

    await createRentalUseCase.execute({
      user_id: user1.id,
      car_id: car.id,
      expected_return_date: dayAdd24Hours,
    });

    await expect(
      await createRentalUseCase.execute({
        user_id: user2.id,
        car_id: car.id,
        expected_return_date: dayAdd24Hours,
      })
    ).rejects.toEqual(new AppError("Car is unavailable"));
  });

  it("should not be abe to create a new rental with invalid return time", async () => {
    await expect(
      await createRentalUseCase.execute({
        user_id: "123",
        car_id: "test",
        expected_return_date: dayjs().toDate(),
      })
    ).rejects.toEqual(new AppError("Invalid return time"));
  });
});
