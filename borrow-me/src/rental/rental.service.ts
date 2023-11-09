import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Rental } from "./rental.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.eneity";
import { UserDto } from "src/user/user.dto";
import { Product } from "src/product/product.entity";
import { ProductImage } from "src/company/image.entity";
import { RENTAL_TYPE } from "./constant";

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>
  ) {}
  async getRental(userDto: UserDto) {
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
    });
    const rentals = await this.rentalRepository.find({
      where: { userPk: user.userPk },
    });
    const products = await Promise.all(
      rentals.map(
        async (rental) =>
          await this.productRepository.findOne({
            where: { productPk: rental.productPk },
          })
      )
    );

    return await Promise.all(
      rentals.map(async (rental) => ({
        rentalPk: rental.rentalPk,
        productId: rental.productPk,
        productName: products.find(
          (product) => product.productPk === rental.productPk
        ).name,
        startAt: rental.startAt,
        endAt: rental.endAt,
        productImagePath: await this.productImageRepository
          .findOne({
            where: { productPk: rental.productPk },
          })
          .then((productImage) => productImage.productImagePath),
        status: rental.status,
      }))
    );
  }
  async returnRental(userDto: UserDto, rentalPk: number) {
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
    });
    const rental = await this.rentalRepository.findOne({
      where: { rentalPk, userPk: user.userPk },
    });
    rental.status = RENTAL_TYPE.RETURN;
    await this.rentalRepository.save(rental);
    return rental;
  }
  async getRentalByRentalId(rentalPk: number) {
    return await this.rentalRepository.findOne({ where: { rentalPk } });
  }
}
