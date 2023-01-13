import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseUsecase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      userRepositoryInMemory
    );
    createUserUseUsecase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "1234002",
      email: "user@test.com",
      password: "User Test4321",
      name: "User Teste",
    };
    await createUserUseUsecase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not abe to authenticate an nonexistent user", async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: "false@email.com",
        password: "User Test4321",
      })
    ).rejects.toEqual(new AppError("Email or password incorrect!"));
  });

  it("should not abe to authenticate with incorrect password", async () => {
    const user: ICreateUserDTO = {
      driver_license: "1234002",
      email: "user@test.com",
      password: "User Test4321",
      name: "User Teste",
    };

    await createUserUseUsecase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: "false12345",
      })
    ).rejects.toEqual(new AppError("Email or password incorrect!"));
  });
});
