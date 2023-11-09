import {
  Controller,
  Get,
  Req,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Request } from "express";
import { ResponseInterceptor } from "src/response/response.interceptor";
import { AuthInterceptor } from "src/response/auth.interceptor";
import { AllHttpExceptionFilter } from "src/response/allHttpException.filter";

@UseFilters(AllHttpExceptionFilter)
@UseInterceptors(AuthInterceptor, ResponseInterceptor)
@Controller("api/category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategory(@Req() req: Request) {
    return await this.categoryService.getCategory();
  }

  @Get(":categoryId")
  async getCategoryProduct(@Req() req: Request) {
    return await this.categoryService.getCategoryProduct(
      Number(req.params.categoryId)
    );
  }
}
