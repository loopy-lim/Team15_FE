import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { RentProductDto } from "./product.dto";
import { Request } from "express";
import { AllHttpExceptionFilter } from "src/response/allHttpException.filter";
import { AuthInterceptor } from "src/response/auth.interceptor";
import { ResponseInterceptor } from "src/response/response.interceptor";

@Controller("api/product")
@UseFilters(AllHttpExceptionFilter)
@UseInterceptors(ResponseInterceptor)
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(@Query("search") search: string) {
    if (search) {
      return await this.productService.searchProducts(search);
    }
    return await this.productService.getProducts();
  }

  @Get(":id")
  async getProduct(@Param("id") id: number) {
    return await this.productService.getProduct(id);
  }

  @Post(":id/rent")
  @UseInterceptors(AuthInterceptor)
  async rentProduct(
    @Param("id") id: number,
    @Body() body: RentProductDto,
    @Req() req: Request
  ) {
    return await this.productService.rentProduct(id, body);
  }
}
