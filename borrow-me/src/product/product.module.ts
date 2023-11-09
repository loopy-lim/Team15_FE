import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { UsersModule } from "src/user/user.module";
import { Review } from "src/review/review.entity";
import { Location } from "src/location/location.entity";
import { Category } from "src/category/category.entity";
import { Company } from "src/company/company.eneity";
import { ProductImage } from "../company/image.entity";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Review,
      Location,
      Category,
      Company,
      ProductImage,
    ]),
    UsersModule,
  ],
})
export class ProductModule {}
