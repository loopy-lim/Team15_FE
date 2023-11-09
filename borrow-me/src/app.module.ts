import { Module } from "@nestjs/common";
import { UsersModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.eneity";
import { Category } from "./category/category.entity";
import { Coin, CoinLog } from "./coin/coin.entity";
import { Company } from "./company/company.eneity";
import { Product } from "./product/product.entity";
import { Rental } from "./rental/rental.entity";
import { Review } from "./review/review.entity";
import { University } from "./university/university.entity";
import { ProductImage } from "./company/image.entity";
import { Location } from "./location/location.entity";
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from "./product/product.module";
import { CoinModule } from "./coin/coin.module";
import { CategoryModule } from "./category/category.module";
import { RentalModule } from "./rental/rental.module";
import { ReviewModule } from "./review/review.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

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
      // autoLoadEntities: true,
      synchronize: true,
      // logging: true,
      // dropSchema: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "dist"),
    }),
    UsersModule,
    ProductModule,
    CoinModule,
    CategoryModule,
    RentalModule,
    ReviewModule,
  ],
})
export class AppModule {
  constructor() {}
}
