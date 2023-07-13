import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Friendship } from '@prisma/client';
import { FriendService } from './friend.service';

class CreateFriendDto {
  @ApiProperty()
  user_1_id: number;

  @ApiProperty()
  user_2: number;

  @ApiProperty()
  created_at: Date;
}


@ApiTags('friends')
@Controller('friends')
export class FriendController {
  constructor(private friendService: FriendService) {}

  @Post()
  @ApiBody({ type: CreateFriendDto })
  async createFriend(
    @Body() createFriendDto: CreateFriendDto,
  ): Promise<Friendship> {
    return this.friendService.createFriend(createFriendDto.user_1_id, createFriendDto.user_2, createFriendDto.created_at);
  }

  @Get()
  async getAllFriends(): Promise<Friendship[]> {
    return this.friendService.getAllFriends();
  }

  @Get('id/:id')
  async getFriendById(@Param('id') id: string): Promise<Friendship | null> {
    return this.friendService.getFriendById(Number(id));
  }
}
