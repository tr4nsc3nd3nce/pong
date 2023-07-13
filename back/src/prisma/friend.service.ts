import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Friendship } from '@prisma/client';

@Injectable()
export class FriendService {
  constructor(private prisma: PrismaService) {}

  async createFriend(user_1_id: number, user_2_id: number, created_at: Date): Promise<Friendship> {
    return this.prisma.friendship.create({
      data: {
        user_1: {
          connect: { id: user_1_id },
        },
        user_2: user_2_id,
        created_at,
      },
    });
  }

  async getAllFriends(): Promise<Friendship[]> {
    return this.prisma.friendship.findMany({
    });
  }

  async getFriendById(id: number): Promise<Friendship | null> {
    return this.prisma.friendship.findUnique({
      where: {
        id: id,
      }
    });
  }
}

