import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;

describe("Create Car", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase();
  });

  it("should be to create a new car", async () => {
    await createCarUseCase.execute();
  });
});
