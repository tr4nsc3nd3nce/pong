import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Channel } from '@prisma/client';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  async createChannel(creatorId: number, name: string, password: string, privated: boolean, created_at: Date): Promise<Channel> {
    return this.prisma.channel.create({
      data: {
        creator: {
          connect: { id: creatorId },
        },
        name,
        password,
        privated,
        created_at,
      },
    });
  }

  async getAllChannel(): Promise<Channel[]> {
    return this.prisma.channel.findMany({
    });
  }

  async getChannelById(id: number): Promise<Channel | null> {
    return this.prisma.channel.findUnique({
      where: {
        id: id,
      }
    });
  }

  async getChannelByUser(creatorId: number): Promise<Channel[]> {
    return this.prisma.channel.findMany({
        where: {
            creatorId: creatorId,
        }
    });
  }

  async getChannelMessages(id: number): Promise<Channel[]> {
    return this.prisma.channel.findMany({
        where: {
            id: id,
        },
        include: {
            messages: true,
        }
    });
  }

  async blockUserFromChannel(id: number, user: number): Promise<Channel> {
    const channel = await this.prisma.channel.update({
      where: { id: id },
      data: {
        blocked: {
          connect: { id: user }
        },
      },
    });
  
    if (!channel) {
      throw new Error('Channel not found');
    }
  
    return channel;
  }
  
  
}