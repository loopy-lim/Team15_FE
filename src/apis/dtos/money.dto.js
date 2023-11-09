export class MoneyDto {
  constructor({ piece }) {
    this.piece = piece;
  }
}

export class MoneyLogDto {
  constructor({ piece, coinType, createdAt }) {
    this.piece = piece;
    this.coinType = coinType;
    this.createdAt = new Date(createdAt);
  }
}
