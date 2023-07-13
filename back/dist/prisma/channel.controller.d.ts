import { Channel } from '@prisma/client';
import { ChannelService } from './channel.service';
declare class CreateChannelDto {
    creatorId: number;
    name: string;
    password: string;
    privated: boolean;
    created_at: Date;
}
export declare class ChannelController {
    private channelService;
    constructor(channelService: ChannelService);
    createChannel(createChannelDto: CreateChannelDto): Promise<Channel>;
    getAllFriends(): Promise<Channel[]>;
    getChannelById(id: number): Promise<Channel | null>;
    getChannelByUser(creatorId: number): Promise<Channel[] | null>;
    getChannelMessages(id: number): Promise<Channel[] | null>;
}
export {};
