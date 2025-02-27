// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import discord from 'discord.js';
import { CommandCategory } from '../constants';

export interface CommandDefinition {
    name: string | string[],
    description?: string,
    category?: CommandCategory,
    requiredPermissions?: discord.PermissionString[],
    executor: (msg: discord.Message, client?: discord.Client) => Promise<any>,
}
