import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { AllHttpExceptionFilter } from "src/response/allHttpException.filter";
import { AuthInterceptor } from "src/response/auth.interceptor";
import { ResponseInterceptor } from "src/response/response.interceptor";
import { RentalService } from "./rental.service";
import { Request } from "express";
import { UsersService } from "src/user/user.service";

@Controller("api/rental")
@UseFilters(AllHttpExceptionFilter)
@UseInterceptors(AuthInterceptor, ResponseInterceptor)
export class RentalController {
  constructor(
    private readonly rentalService: RentalService,
    private readonly usersService: UsersService
  ) {}

  @Get()
  async getRental(@Req() req: Request) {
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    return this.rentalService.getRental(user);
  }

  @Post(":rentalId/return")
  async returnRental(@Param("rentalId") rentalId: number, @Req() req: Request) {
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    return this.rentalService.returnRental(user, rentalId);
  }
}
