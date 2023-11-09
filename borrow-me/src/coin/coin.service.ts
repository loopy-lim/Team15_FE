import { Injectable, UseFilters, UseInterceptors } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coin, CoinLog } from "./coin.entity";
import { Repository } from "typeorm";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";
import { Product } from "src/product/product.entity";
import { RentProductDto } from "src/product/product.dto";
import { Rental } from "src/rental/rental.entity";
import { AllHttpExceptionFilter } from "src/response/allHttpException.filter";
import { AuthInterceptor } from "src/response/auth.interceptor";
import { ResponseInterceptor } from "src/response/response.interceptor";
import { RENTAL_TYPE } from "src/rental/constant";

@Injectable()
@UseFilters(AllHttpExceptionFilter)
@UseInterceptors(AuthInterceptor, ResponseInterceptor)
export class CoinService {
  constructor(
    @InjectRepository(Coin)
    private coinRepository: Repository<Coin>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(CoinLog)
    private coinLogRepository: Repository<CoinLog>,
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>
  ) {}
  async getPayment(user: UserDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    return await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
  }
  async useCoin(user: UserDto, productId: number, body: RentProductDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    const productFromDb = await this.productRepository.findOne({
      where: { productPk: productId },
    });
    const { endAt, startAt } = body;
    const coinFromDb = await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
    const dayDiff: number = Math.ceil(
      (new Date(endAt).getTime() - new Date(startAt).getTime()) /
        (1000 * 3600 * 24)
    );
    const price: number = productFromDb.rentalPrice * dayDiff;
    if (coinFromDb.piece < price) {
      return null;
    }
    this.rentalRepository.save({
      userPk: userFromDb.userPk,
      productPk: productId,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      status: RENTAL_TYPE.RENT,
    });
    this.coinLogRepository.save({
      coinPk: coinFromDb.coinPk,
      piece: price,
      coinType: "결제",
    });
    this.coinRepository.update(
      { userPk: userFromDb.userPk },
      { piece: coinFromDb.piece - price }
    );
    return await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
  }
  async charge(user: UserDto, body: { piece: number }) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    const coinFromDb = await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
    await this.coinLogRepository.save({
      coinPk: coinFromDb.coinPk,
      piece: body.piece,
      coinType: "충전",
    });
    await this.coinRepository.update(
      { userPk: userFromDb.userPk },
      { piece: +coinFromDb.piece + +body.piece }
    );
    return await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
  }

  async getCoinLog(user: UserDto) {
    const userFromDb = await this.userRepository.findOne({
      where: { email: user.email },
    });
    const coinFromDb = await this.coinRepository.findOne({
      where: { userPk: userFromDb.userPk },
    });
    return await this.coinLogRepository.find({
      where: { coinPk: coinFromDb.coinPk },
      order: { createdAt: "DESC" },
    });
  }
}
