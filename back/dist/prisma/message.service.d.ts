import { PrismaService } from './prisma.service';
import { Message } from '@prisma/client';
export declare class MessageService {
    private prisma;
    constructor(prisma: PrismaService);
    createMessage(userId: number, channelId: number, recv_id: number, text: string): Promise<Message>;
    getAllMessages(): Promise<Message[]>;
    getMessageById(id: number): Promise<Message>;
    getMessageByUser(userId: number): Promise<Message[]>;
    getMessageByChannel(channelId: number): Promise<Message[]>;
}
