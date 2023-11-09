import { Catch, ExceptionFilter } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch()
export class AllHttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: any, host: import("@nestjs/common").ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(exception.status ?? 500).json({
      status: exception.status,
      reason: exception.reason,
      message: exception.message,
    });
  }
}
