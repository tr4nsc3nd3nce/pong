import { PrismaService } from './prisma.service';
import { Friendship } from '@prisma/client';
export declare class FriendService {
    private prisma;
    constructor(prisma: PrismaService);
    createFriend(user_1_id: number, user_2_id: number, created_at: Date): Promise<Friendship>;
    getAllFriends(): Promise<Friendship[]>;
    getFriendById(id: number): Promise<Friendship | null>;
}
