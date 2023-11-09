export class RentalDto {
  constructor({
    productId,
    startAt,
    endAt,
    productName,
    productImagePath,
    status,
    rentalPk,
  }) {
    this.rentalId = rentalPk;
    this.productId = productId;
    this.productName = productName;
    this.startAt = new Date(startAt);
    this.endAt = new Date(endAt);
    this.productImagePath = productImagePath;
    this.status = status;
  }
}
