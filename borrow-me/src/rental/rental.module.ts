import { Module } from "@nestjs/common";
import { RentalService } from "./rental.service";
import { RentalController } from "./rental.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "src/user/user.module";
import { Rental } from "./rental.entity";
import { User } from "src/user/user.eneity";
import { Product } from "src/product/product.entity";
import { ProductImage } from "src/company/image.entity";

@Module({
  providers: [RentalService],
  controllers: [RentalController],
  imports: [
    TypeOrmModule.forFeature([Rental, User, Product, ProductImage]),
    UsersModule,
  ],
  exports: [RentalService],
})
export class RentalModule {}
