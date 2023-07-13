"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
let ChannelService = class ChannelService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createChannel(creatorId, name, password, privated, created_at) {
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
    async getAllChannel() {
        return this.prisma.channel.findMany({});
    }
    async getChannelById(id) {
        return this.prisma.channel.findUnique({
            where: {
                id: id,
            }
        });
    }
    async getChannelByUser(creatorId) {
        return this.prisma.channel.findMany({
            where: {
                creatorId: creatorId,
            }
        });
    }
    async getChannelMessages(id) {
        return this.prisma.channel.findMany({
            where: {
                id: id,
            },
            include: {
                messages: true,
            }
        });
    }
    async blockUserFromChannel(id, user) {
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
};
ChannelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChannelService);
exports.ChannelService = ChannelService;
//# sourceMappingURL=channel.service.js.map