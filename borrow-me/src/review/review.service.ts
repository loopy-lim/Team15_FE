import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { Repository } from "typeorm";
import { ReviewDto } from "./review.dto";
import { Rental } from "src/rental/rental.entity";
import { RENTAL_TYPE } from "src/rental/constant";
import { User } from "src/user/user.eneity";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getReviewByProductId(productId: number) {
    const reviews = await this.reviewRepository.find({
      where: { productPk: productId },
    });
    return Promise.all(
      reviews.map(async (review) => {
        const rental = await this.rentalRepository.findOne({
          where: { rentalPk: review.rentalPk },
        });
        const user = await this.userRepository.findOne({
          where: { userPk: rental.userPk },
        });
        return {
          star: review.star,
          content: review.content,
          nickname: user.nickname,
          idCardImagePath: user.idCardImagePath,
        };
      })
    );
  }

  async getReviewByRentalId(rentalId: number) {
    return await this.reviewRepository.find({
      where: { rentalPk: rentalId },
    });
  }

  async createReview(review: ReviewDto, rental: Rental) {
    this.rentalRepository.update(
      { rentalPk: rental.rentalPk },
      { status: RENTAL_TYPE.REVIEW }
    );
    return await this.reviewRepository.save({
      star: review.star,
      content: review.content,
      rentalPk: rental.rentalPk,
      productPk: rental.productPk,
    });
  }

  async updateReview(review: ReviewDto, reviewId: number) {
    return await this.reviewRepository.update({ reviewPk: reviewId }, review);
  }

  async deleteReview(reviewId: number) {
    await this.reviewRepository.delete({ reviewPk: reviewId });
    return this.getReviewByRentalId(reviewId);
  }
}
