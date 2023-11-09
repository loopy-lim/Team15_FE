import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/product.entity";
import { Category } from "./category.entity";
import { Rental } from "src/rental/rental.entity";
import { User } from "src/user/user.eneity";
import { Review } from "src/review/review.entity";
import { Location } from "src/location/location.entity";
import { ProductImage } from "src/company/image.entity";

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductImage,
      Rental,
      User,
      Review,
      Location,
      Category,
    ]),
  ],
})
export class CategoryModule {}
