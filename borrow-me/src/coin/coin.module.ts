import { Module } from "@nestjs/common";
import { CoinService } from "./coin.service";
import { CoinController } from "./coin.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coin, CoinLog } from "./coin.entity";
import { UsersModule } from "src/user/user.module";
import { User } from "src/user/user.eneity";
import { Product } from "src/product/product.entity";
import { Rental } from "src/rental/rental.entity";

@Module({
  providers: [CoinService],
  controllers: [CoinController],
  imports: [
    TypeOrmModule.forFeature([Coin, CoinLog, User, Product, Rental]),
    UsersModule,
  ],
})
export class CoinModule {}
