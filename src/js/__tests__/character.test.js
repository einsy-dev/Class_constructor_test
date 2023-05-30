/* eslint-disable linebreak-style */
/* eslint-disable indent */

/* import Character from '../Character'; */
import Character from '../Character';

describe('Test class Character', () => {
    const char = new Character('Elion', 'Bowman', 100, 1, 25, 25);
    test('Class element test', () => {
        char.levelUp();
        char.damage(15);
        expect(char).toEqual({
            name: 'Elion', type: 'Bowman', health: 89, level: 2, attack: 28, defence: 28,
        });
    });
});
