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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const channel_service_1 = require("./channel.service");
class CreateChannelDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateChannelDto.prototype, "creatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateChannelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateChannelDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateChannelDto.prototype, "privated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateChannelDto.prototype, "created_at", void 0);
let ChannelController = class ChannelController {
    constructor(channelService) {
        this.channelService = channelService;
    }
    async createChannel(createChannelDto) {
        return this.channelService.createChannel(createChannelDto.creatorId, createChannelDto.name, createChannelDto.password, createChannelDto.privated, createChannelDto.created_at);
    }
    async getAllFriends() {
        return this.channelService.getAllChannel();
    }
    async getChannelById(id) {
        return this.channelService.getChannelById(Number(id));
    }
    async getChannelByUser(creatorId) {
        return this.channelService.getChannelByUser(Number(creatorId));
    }
    async getChannelMessages(id) {
        return this.channelService.getChannelMessages(Number(id));
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: CreateChannelDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateChannelDto]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "createChannel", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getAllFriends", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getChannelById", null);
__decorate([
    (0, common_1.Get)('creatorId/:creatorId'),
    __param(0, (0, common_1.Param)('creatorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getChannelByUser", null);
__decorate([
    (0, common_1.Get)('messages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChannelController.prototype, "getChannelMessages", null);
ChannelController = __decorate([
    (0, swagger_1.ApiTags)('channels'),
    (0, common_1.Controller)('channels'),
    __metadata("design:paramtypes", [channel_service_1.ChannelService])
], ChannelController);
exports.ChannelController = ChannelController;
//# sourceMappingURL=channel.controller.js.map