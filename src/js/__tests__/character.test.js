/* eslint-disable linebreak-style */
import Bowman from '../Bowman';
import Character from '../Character';

describe('Test class Character', () => {
  test('Проверка имени на тип строка', () => {
    expect(() => new Character(1, 'Bowman')).toThrow(new Error('Имя должно быть строкой'));
  });

  test('Проверка имени на количество символов ', () => {
    expect(() => new Character('A', 'Bowman'))
      .toThrow(new Error('Длина имени должна быть от 2 до 10 символов'));
    expect(() => new Character('BatmanRobin', 'Bowman'))
      .toThrow(new Error('Длина имени должна быть от 2 до 10 символов'));
  });

  test('Проверка типа', () => {
    expect(() => new Character('Alex', 'Bow'))
      .toThrow(new Error('Некорректный тип'));
  });

  test('Проверка повышения уровня умершего', () => {
    expect(() => {
      const bowman = new Bowman('Persi');
      bowman.health = 0;
      bowman.levelUp();
    }).toThrow(new Error('Здоровье на нуле'));
  });

  test('Проверка получения урона больше чем есть здоровья', () => {
    expect(() => {
      const bowerman = new Bowman('bowman');
      bowerman.damage(150);
    }).toThrow(new Error('Здоровье на нуле'));
  });

  test('Инициализация обьекта Character', () => {
    const warior = new Character('Alex', 'Bowman');
    const correct = {
      name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: undefined, defence: undefined,
    };
    expect(warior).toEqual(correct);
  });

  test('Проверка повышения уровня', () => {
    const bowerman = new Bowman('Einsy');
    bowerman.levelUp();
    const result = {
      name: 'Einsy', type: 'Bowman', health: 100, level: 2, attack: 28, defence: 28,
    };
    expect(bowerman).toEqual(result);
  });

  test('Проверка получения урона', () => {
    const bowerman = new Bowman('bowman');
    bowerman.damage(10);
    const result = {
      attack: 25, defence: 25, health: 92, level: 1, name: 'bowman', type: 'Bowman',
    };
    expect(bowerman).toEqual(result);
  });
});
