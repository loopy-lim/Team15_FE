import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { UsersController } from "./user.controller";
import { User } from "./user.eneity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { University } from "src/university/university.entity";
import { JwtModule } from "@nestjs/jwt";
import * as env from "dotenv";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Coin } from "src/coin/coin.entity";
env.config();

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, University, Coin]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get("JWT_SECRET_KEY"),
        signOptions: {
          expiresIn: "100d",
        },
      }),
    }),
  ],
  exports: [UsersService],
})
export class UsersModule {}
