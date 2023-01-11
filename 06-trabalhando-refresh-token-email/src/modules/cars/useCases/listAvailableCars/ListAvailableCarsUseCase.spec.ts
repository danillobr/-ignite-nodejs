import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "2 portas",
      fine_amount: 100.0,
      license_plate: "DEF-12341015",
      name: "Car1",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("shold be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "2 portas",
      fine_amount: 100.0,
      license_plate: "DEF-12341015",
      name: "Car2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("shold be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 110.0,
      description: "2 portas",
      fine_amount: 100.0,
      license_plate: "DEF-12341015",
      name: "Car3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("shold be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "12345",
      daily_rate: 110.0,
      description: "2 portas",
      fine_amount: 100.0,
      license_plate: "DEF-12341015",
      name: "Car4",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
