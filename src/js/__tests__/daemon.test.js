/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Daemon from '../Daemon';

describe('Test Bowman levelUp', () => {
    const testClass = new Daemon('Lois');
    test('Class element test', () => {
        expect(testClass).toEqual({
            name: 'Lois', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
        });
    });
});
