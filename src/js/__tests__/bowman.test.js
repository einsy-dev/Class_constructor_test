/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Bowman from '../Bowman';

describe('Test Bowman levelUp', () => {
    const testClass = new Bowman('Lois');
    test('Class element test', () => {
        expect(testClass).toEqual({
            name: 'Lois', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        });
    });
});
