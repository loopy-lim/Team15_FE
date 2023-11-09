export class ReviewDto {
  constructor({ nickname, idCardImagePath, star, content }) {
    this.nickname = nickname;
    this.idCardImagePath = idCardImagePath;
    this.star = star;
    this.content = content;
  }
}
