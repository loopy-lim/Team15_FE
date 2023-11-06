export class ProductDto {
  constructor({
    id,
    category,
    productName,
    rentalPrice,
    regularPrice,
    location,
    productImagePath,
    description,
    review,
    content,
    companyName,
    companyImagePath,
  }) {
    this.id = id;
    this.category = category;
    this.productName = productName;
    this.rentalPrice = rentalPrice;
    this.regularPrice = regularPrice;
    this.description = description;
    this.productImagePath = productImagePath;
    this.companyName = companyName;
    this.companyImagePath = companyImagePath;
    this.location = location;
    this.review = review;
    this.content = content;
  }
}

export class ProductCalculateRentalDto {
  constructor({
    id,
    productName,
    location,
    productImagePath,
    companyName,
    totalPrice,
  }) {
    this.id = id;
    this.productName = productName;
    this.productImagePath = productImagePath;
    this.location = location;
    this.companyName = companyName;
    this.totalPrice = totalPrice;
  }
}
