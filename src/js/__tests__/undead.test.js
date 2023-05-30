/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Undead from '../Undead';

describe('Test Bowman levelUp', () => {
    const testClass = new Undead('Lois');
    test('Class element test', () => {
        expect(testClass).toEqual({
            name: 'Lois', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
        });
    });
});
