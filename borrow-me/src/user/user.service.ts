import { Injectable, Logger } from "@nestjs/common";
import { SignInDto, SignUpDto, UserDto } from "./user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.eneity";
import { Repository } from "typeorm";
import { University } from "src/university/university.entity";
import { JwtService } from "@nestjs/jwt";
import { Coin } from "src/coin/coin.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRpository: Repository<User>,
    @InjectRepository(University)
    private universityRepository: Repository<University>,
    private jwtService: JwtService,
    @InjectRepository(Coin)
    private coinRepository: Repository<Coin>
  ) {}

  async create(signUpDto: SignUpDto) {
    const { universityPk } = await this.universityRepository.findOne({
      where: { name: signUpDto.universityName },
    });
    const user = await this.userRpository.save({
      email: signUpDto.email,
      password: signUpDto.password,
      nickname: signUpDto.nickname,
      idCardImagePath: signUpDto.idCardImagePath,
      universityPk,
      role: "USER",
    });
    await this.coinRepository.save({
      userPk: user.userPk,
      coin: 0,
    });

    return !!user;
  }

  async isSameEmail(email: string) {
    const user = await this.userRpository.findOne({ where: { email } });
    return !!user;
  }

  async login(signInDto: SignInDto) {
    const user = await this.userRpository.findOne({
      where: { email: signInDto.email, password: signInDto.password },
    });

    const payload = { email: user.email };

    return user ? await this.jwtService.signAsync(payload) : null;
  }

  async validateUser(payload: string) {
    const { email } = await this.jwtService.verifyAsync(payload);
    const user = await this.userRpository.findOne({ where: { email } });
    return !!user;
  }

  async getUser(payload: string) {
    const { email } = await this.jwtService.verifyAsync(payload);
    const user = await this.userRpository.findOne({ where: { email } });
    const university = await this.universityRepository.findOne({
      where: { universityPk: user.universityPk },
    });
    return new UserDto({ ...user, universityName: university.name });
  }

  async updateUser(payload: string, userDto: SignUpDto) {
    const { email } = await this.jwtService.verifyAsync(payload);
    const user = await this.userRpository.findOne({ where: { email } });
    const university = await this.universityRepository.findOne({
      where: { name: userDto.universityName },
    });
    await this.userRpository.update(
      { ...user },
      {
        nickname: userDto.nickname,
        idCardImagePath: userDto.idCardImagePath,
        universityPk: university.universityPk,
        password: userDto.password,
      }
    );
    return true;
  }
}
