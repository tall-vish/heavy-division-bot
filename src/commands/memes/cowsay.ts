// based off FlyByWire Simulations Discord Bot - https://github.com/flybywiresim/discord-bot

import { say } from 'cowsay';
import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';

export const cowsay: CommandDefinition = {
    name: ['cowsay', 'cs'],
    description: 'Emulates the famous UNIX program `cowsay`.',
    category: CommandCategory.MEMES,
    executor: (msg) => {
        const text = msg.content.replace(/\.(cowsay|cs)\s*/, '');

        if (text) {
            return msg.channel.send(`\`\`\`\n${say(({ text }))}\n\`\`\``);
        }

        return msg.reply('please provide some text.');
    },
};