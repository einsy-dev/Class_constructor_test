/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Swordsman from '../Swordsman';

describe('Test Bowman levelUp', () => {
    const testClass = new Swordsman('Lois');
    test('Class element test', () => {
        expect(testClass).toEqual({
            name: 'Lois', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
        });
    });
});
