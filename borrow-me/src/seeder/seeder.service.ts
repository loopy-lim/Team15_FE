import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { University } from "src/university/university.entity";
import { Repository } from "typeorm";
import {
  categories,
  coinLogs,
  coins,
  companies,
  locations,
  productImages,
  products,
  rentals,
  reviews,
  universities,
  users,
} from "./data";
import { Product } from "src/product/product.entity";
import { Category } from "src/category/category.entity";
import { User } from "src/user/user.eneity";
import { Company } from "src/company/company.eneity";
import { Location } from "src/location/location.entity";
import { Coin, CoinLog } from "src/coin/coin.entity";
import { Review } from "src/review/review.entity";
import { Rental } from "src/rental/rental.entity";
import { ProductImage } from "src/company/image.entity";

@Injectable()
export class SeederService {
  private readonly logger = new Logger(SeederService.name);
  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Coin)
    private coinRepository: Repository<Coin>,
    @InjectRepository(CoinLog)
    private coinLogRepository: Repository<CoinLog>,
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>
  ) {}

  async seedUniversities() {
    universities.map((university) =>
      this.universityRepository.save(university)
    );
  }
  async seedLocations() {
    locations.map((location) => this.locationRepository.save(location));
  }
  async seedCategories() {
    categories.map((category) => this.categoryRepository.save(category));
  }
  async seedUsers() {
    users.map((user) => this.userRepository.save(user));
  }
  async seedCompanies() {
    companies.map((company) => this.companyRepository.save(company));
  }
  async seedProducts() {
    products.map((university) => this.productRepository.save(university));
  }
  async seedCoins() {
    coins.map((coin) => this.coinRepository.save(coin));
  }
  async seedCoinLogs() {
    coinLogs.map((coin) => this.coinLogRepository.save(coin));
  }
  async seedReviews() {
    reviews.map((review) => this.reviewRepository.save(review));
  }
  async seedRentals() {
    rentals.map((rental) => this.rentalRepository.save(rental));
  }
  async seedProductImages() {
    productImages.map((product) => this.productImageRepository.save(product));
  }

  async seedAll() {
    Promise.all([
      await this.seedUniversities(),
      await this.seedLocations(),
      await this.seedCategories(),
      await this.seedUsers(),
      await this.seedCompanies(),
      await this.seedProducts(),
      await this.seedCoins(),
      await this.seedCoinLogs(),
      await this.seedReviews(),
      await this.seedRentals(),
      await this.seedProductImages(),
    ]);
  }
}
