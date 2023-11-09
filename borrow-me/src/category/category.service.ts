import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./category.entity";
import { Repository } from "typeorm";
import { Product } from "src/product/product.entity";
import { Rental } from "src/rental/rental.entity";
import { Review } from "src/review/review.entity";
import { Location } from "src/location/location.entity";
import { ProductImage } from "src/company/image.entity";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>
  ) {}
  async getCategory() {
    return await this.categoryRepository.find();
  }

  async getCategoryProduct(categoryId: number) {
    const products = await this.productRepository.find({
      where: { categoryPk: categoryId },
    });
    const categorys = await this.categoryRepository.find();
    const reviews = await this.reviewRepository.find();
    const locations = await this.locationRepository.find();
    return await Promise.all(
      products.map(async (product) => ({
        id: product.productPk,
        category: categorys.filter(
          (category) => product.categoryPk === category.categoryPk
        )[0].name,
        productName: product.name,
        rentalPrice: product.rentalPrice,
        regularPrice: product.regularPrice,
        review: reviews.filter(
          (review) => product.productPk === review.productPk
        ).length,
        location: locations.filter(
          (location) => product.locationPk === location.locationPk
        )[0].name,
        productImagePath: Array(
          (
            await this.productImageRepository.findOne({
              where: { productPk: product.productPk },
            })
          ).productImagePath
        ),
      }))
    );
  }
}
