/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, type) {
    const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    if (!typeList.includes(type)) {
      throw new Error('Некорректный тип');
    }
    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('Здоровье на нуле');
    else {
      this.level += 1;
      this.attack += Math.round(this.attack / 10);
      this.defence += Math.round(this.attack / 10);
      this.health = 100;
    }
  }

  damage(points) {
    this.health -= Math.round(points * (1 - this.defence / 100));
    if (this.health <= 0) {
      this.health = 0;
      throw new Error('Здоровье на нуле');
    }
  }
}
