import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dtos/register-user.dto';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dtos/login-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    let user = await this.usersService.findOne(registerUserDto.username);
    if (user) {
      throw new BadRequestException('User already exists');
    } else {
      const user = await this.usersService.create(
        registerUserDto.username,
        registerUserDto.password,
      );
      const payload = { username: user.username };
      return {
        user: payload,
        accessToken: await this.jwtService.signAsync(payload),
      };
    }
  }

  async login(loginUserDto: LoginUserDto) {
    let user = await this.usersService.findOne(loginUserDto.username);
    if (user) {
      const isMatched = await bcrypt.compare(
        loginUserDto.password,
        user.password,
      );
      if (isMatched) {
        const payload = { username: user.username };
        return {
          user: payload,
          accessToken: await this.jwtService.signAsync(payload),
        };
      } else {
        throw new BadRequestException('Invalid credentials');
      }
    } else {
      throw new BadRequestException('Invalid credentials');
    }
  }
}
