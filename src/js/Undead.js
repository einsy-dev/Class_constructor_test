/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Character from './Character';

export default class Undead extends Character {
    constructor(name, type = 'Undead', health, level, attack = 25, defence = 25) {
        super(name, type, health, level, attack, defence);
    }
}
