// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

const MERGE_URL = 'https://tenor.com/view/git-merge-gitmerge-gif-18010083';

export const merge: CommandDefinition = {
    name: 'merge',
    description: 'GIT MERGE!',
    category: CommandCategory.MEMES,
    executor: async (msg) => {
        await msg.channel.send(MERGE_URL);
    },
};