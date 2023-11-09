export interface SignUpDto {
  universityName: string;
  nickname: string;
  email: string;
  password: string;
  idCardImagePath: string;
}

export interface EmailDto {
  email: string;
}

export interface SignInDto {
  email: string;
  password: string;
}

interface User {
  universityName: string;
  nickname: string;
  email: string;
  idCardImagePath: string;
}

export class UserDto {
  universityName: string;
  nickname: string;
  email: string;
  idCardImagePath: string;
  constructor(user: User) {
    this.universityName = user.universityName;
    this.nickname = user.nickname;
    this.email = user.email;
    this.idCardImagePath = user.idCardImagePath;
  }
}
