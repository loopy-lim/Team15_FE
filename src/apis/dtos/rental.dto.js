export class RentalDto {
  constructor({ productId, borrowAt, returnAt, reviewed }) {
    this.productId = productId;
    this.borrowAt = new Date(borrowAt);
    this.returnAt = new Date(returnAt);
    this.reviewed = reviewed;
  }
}
