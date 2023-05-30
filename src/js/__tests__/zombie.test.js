/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Zombie from '../Zombie';

describe('Test Bowman levelUp', () => {
    const testClass = new Zombie('Lois');
    test('Class element test', () => {
        expect(testClass).toEqual({
            name: 'Lois', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
        });
    });
});
