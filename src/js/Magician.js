/* eslint-disable linebreak-style */
/* eslint-disable indent */

import Character from './Character';

export default class Magician extends Character {
    constructor(name, type = 'Magician', health, level, attack = 10, defence = 40) {
        super(name, type, health, level, attack, defence);
    }
}
