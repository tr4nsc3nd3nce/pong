import { PrismaService } from './prisma.service';
import { Channel } from '@prisma/client';
export declare class ChannelService {
    private prisma;
    constructor(prisma: PrismaService);
    createChannel(creatorId: number, name: string, password: string, privated: boolean, created_at: Date): Promise<Channel>;
    getAllChannel(): Promise<Channel[]>;
    getChannelById(id: number): Promise<Channel | null>;
    getChannelByUser(creatorId: number): Promise<Channel[]>;
    getChannelMessages(id: number): Promise<Channel[]>;
    blockUserFromChannel(id: number, user: number): Promise<Channel>;
}
