import {
  Controller,
  Get,
  UseGuards,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(Number.parseInt(id));
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.create(createUser);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
  ): Promise<UpdateResult> {
    return this.userService.update(Number.parseInt(id), updateUser);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.delete(Number.parseInt(id));
  }
}
