import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { RentalService } from "src/rental/rental.service";
import { ReviewDto } from "./review.dto";
import { Request } from "express";
import { UsersService } from "src/user/user.service";
import { AllHttpExceptionFilter } from "src/response/allHttpException.filter";
import { AuthInterceptor } from "src/response/auth.interceptor";
import { ResponseInterceptor } from "src/response/response.interceptor";
import { CommonError } from "src/error/Common.error";

@Controller("api/review")
@UseFilters(AllHttpExceptionFilter)
@UseInterceptors(AuthInterceptor, ResponseInterceptor)
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly rentalService: RentalService,
    private readonly usersService: UsersService
  ) {}

  @Get(":productId")
  async getReview(@Param("productId") productId: number) {
    return await this.reviewService.getReviewByProductId(productId);
  }

  @Post(":rentalId")
  async createReview(
    @Body() body: ReviewDto,
    @Param("rentalId") rentalId: number,
    @Req() req: Request
  ) {
    const rental = await this.rentalService.getRentalByRentalId(rentalId);
    const user = await this.usersService.getUser(req.cookies["Authentication"]);
    if (!user) {
      throw new CommonError({
        status: 400,
        message: "유효하지 않은 토큰입니다.",
        reason: "login_unauthenticated_user",
      });
    }
    return await this.reviewService.createReview(body, rental);
  }

  @Patch(":reviewId")
  async updateReview(
    @Body() body: ReviewDto,
    @Param("reviewId") reviewId: number
  ) {
    return await this.reviewService.updateReview(body, reviewId);
  }

  @Delete(":reviewId")
  async deleteReview(@Param("reviewId") reviewId: number) {
    return await this.reviewService.deleteReview(reviewId);
  }
}
