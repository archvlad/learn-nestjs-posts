import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async create(username: string, password: string): Promise<User> {
    return this.userModel.create({
      username,
      password,
    });
  }
  async findOne(username: string) {
    return this.userModel.findOne({ username });
  }
}
