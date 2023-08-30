import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Post as PostClass } from './schemas/post.schema';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
  
  constructor(private readonly postsService: PostsService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() params: any): Promise<PostClass[]> {
    return this.postsService.findAll(params.author);
  }
  
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<PostClass> {
    return this.postsService.create(createPostDto);
  }
}
