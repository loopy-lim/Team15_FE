export class ProductDto {
  constructor({
    id,
    productName,
    rentalPrice,
    location,
    productImagePath,
    description,
    review,
    content,
    companyName,
    companyImagePath,
  }) {
    this.id = id;
    this.productName = productName;
    this.productImagePath = productImagePath;
    this.location = location;
    this.rentalPrice = rentalPrice;
    this.description = description;
    this.review = review;
    this.content = content;
    this.companyName = companyName;
    this.companyImagePath = companyImagePath;
  }
}
