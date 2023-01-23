import { ICreateUserToken } from "../dtos/ICreateUserToken";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserToken): Promise<UserTokens>;
}

export { IUsersTokensRepository };
