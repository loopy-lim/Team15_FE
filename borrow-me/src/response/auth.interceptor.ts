import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";
import { CommonError } from "src/error/Common.error";

export class AuthInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    const token = req.cookies["Authentication"];

    if (!token) {
      throw new CommonError({
        message: "No token provided",
        status: 401,
        reason: "login_unauthenticated_user",
      });
    }
    return handler.handle();
  }
}
