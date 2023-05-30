/* eslint-disable linebreak-style */
/* eslint-disable indent */
export default class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;

        if (typeof this.name !== 'string') {
            throw new Error('Name type must be string', this.name);
        }
        if (this.name.length < 2 || this.name.length > 10) {
            throw new Error('Name length must be above 2 and less 10');
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(this.type)) {
            throw new Error('Incorrect type');
        }
        if ([this.health, this.level].every((el) => el === undefined)) {
            this.defaultSpecs();
        }
    }

    defaultSpecs() {
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack += Math.round(this.attack / 10);
            this.defence += Math.round(this.attack / 10);
            this.health = 100;
        } else throw new Error('Your health is 0, you dead. Unless you are Zombie');
    }

    damage(points) {
        if (this.health > 0) this.health -= Math.round(points * (1 - this.defence / 100));
        if (this.health <= 0) {
            this.health = 0;
            throw new Error('Your health is 0, you dead. Unless you are Zombie');
        }
    }
}
