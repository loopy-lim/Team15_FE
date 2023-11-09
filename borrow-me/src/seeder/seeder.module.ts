import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeederService } from "./seeder.service";
import { University } from "src/university/university.entity";
import { Location } from "src/location/location.entity";
import { Category } from "src/category/category.entity";
import { User } from "src/user/user.eneity";
import { Company } from "src/company/company.eneity";
import { Product } from "src/product/product.entity";
import { Coin, CoinLog } from "src/coin/coin.entity";
import { ProductImage } from "src/company/image.entity";
import { Rental } from "src/rental/rental.entity";
import { Review } from "src/review/review.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [
        User,
        Category,
        Coin,
        CoinLog,
        Company,
        Location,
        Product,
        ProductImage,
        Rental,
        Review,
        University,
      ],
      logging: true,
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      Category,
      Coin,
      CoinLog,
      Company,
      Location,
      Product,
      ProductImage,
      Rental,
      Review,
      University,
    ]),
  ],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
