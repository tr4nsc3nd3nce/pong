import { Friendship } from '@prisma/client';
import { FriendService } from './friend.service';
declare class CreateFriendDto {
    user_1_id: number;
    user_2: number;
    created_at: Date;
}
export declare class FriendController {
    private friendService;
    constructor(friendService: FriendService);
    createFriend(createFriendDto: CreateFriendDto): Promise<Friendship>;
    getAllFriends(): Promise<Friendship[]>;
    getFriendById(id: string): Promise<Friendship | null>;
}
export {};
