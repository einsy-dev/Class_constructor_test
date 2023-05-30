/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Magician from '../Magician';

describe('Test Bowman levelUp', () => {
    const testClass = new Magician('Lois');
    test('Class element test', () => {
        expect(testClass).toEqual({
            name: 'Lois', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
        });
    });
});
