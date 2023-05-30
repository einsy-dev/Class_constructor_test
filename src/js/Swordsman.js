/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Character from './Character';

export default class Swordsman extends Character {
    constructor(name, type = 'Swordsman', health, level, attack = 40, defence = 10) {
        super(name, type, health, level, attack, defence);
    }
}
