// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

export enum Colors {
    HD_BLUE = '#0761e2',
}

export enum CommandCategory {
    B78XH = 'B78XH',
    SUPPORT = 'Support',
    GENERAL = 'General',
    UTILS = 'Utilities',
    MEMES = 'Memes',
    MODERATION = 'Moderation',
}

export enum Channels {
    MOD_LOGS = '964722281089757264',
    USER_LOGS = '964722187581927475',
    SCAM_LOGS = '964722605783400458',
}

export const UserLogExclude = [
    '957125673196073001', // HD Bot
    '983004116349513728', // Staging Bot
];

export const ModLogsExclude = [
    '957125673196073001', // HD Bot
    '983004116349513728', // Staging Bot
];
