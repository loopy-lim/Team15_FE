import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { Repository } from "typeorm";
import { RentProductDto } from "./product.dto";
import { Category } from "src/category/category.entity";
import { Review } from "src/review/review.entity";
import { Location } from "src/location/location.entity";
import { Company } from "src/company/company.eneity";
import { ProductImage } from "../company/image.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>
  ) {}
  async getProducts() {
    const products = await this.productRepository.find();
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

  async getProduct(id: number) {
    const product = await this.productRepository.findOne({
      where: { productPk: id },
    });
    const categorys = await this.categoryRepository.find();
    const companies = await this.companyRepository.find();
    const locations = await this.locationRepository.find();
    const images = await this.productImageRepository.find({
      where: { productPk: id },
    });
    return {
      id: product.productPk,
      category: categorys.filter(
        (category) => product.categoryPk === category.categoryPk
      )[0].name,
      productName: product.name,
      rentalPrice: product.rentalPrice,
      regularPrice: product.regularPrice,
      content: product.content,
      location: locations.filter(
        (location) => product.locationPk === location.locationPk
      )[0].name,
      productImagePath: images.map((image) => image.productImagePath),
      companyName: companies.filter(
        (company) => product.companyPk === company.companyPk
      )[0].name,
      companyImagePath: "https://placehold.co/400",
    };
  }
  async searchProducts(search: string) {
    const products = await this.productRepository
      .createQueryBuilder("product")
      .where("product.name LIKE :search", { search: `%${search}%` })
      .getMany();
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

  async rentProduct(id: number, rentProductDto: RentProductDto) {
    const { startAt, endAt } = rentProductDto;
    const product = await this.productRepository.findOne({
      where: { productPk: id },
    });
    const dayDiff = Math.ceil(
      (new Date(endAt).getTime() - new Date(startAt).getTime()) /
        (1000 * 3600 * 24)
    );
    const company = await this.companyRepository.findOne({
      where: { companyPk: product.companyPk },
    });
    const location = await this.locationRepository.findOne({
      where: { locationPk: product.locationPk },
    });
    const productImage = await this.productImageRepository.findOne({
      where: { productPk: product.productPk },
    });
    return {
      id: product.productPk,
      productName: product.name,
      totalPrice: product.rentalPrice * dayDiff,
      productPathImage: productImage.productImagePath,
      companyName: company.name,
      location: location.name,
    };
  }
}
