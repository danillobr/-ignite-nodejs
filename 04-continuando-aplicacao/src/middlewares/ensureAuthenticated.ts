import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "0074f7cdcb8b471873ff63e809352e2d");
    console.log(decoded);
  } catch {
    throw new Error("Invalid token");
  }
}
