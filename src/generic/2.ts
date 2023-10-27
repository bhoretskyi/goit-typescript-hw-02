/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends AllType, U extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick<U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = {
  name: 'Top Object',
  position: 1,
  color: 'Red',
  weight: 10,
};

const bottomObject = {
  name: 'Bottom Object',
  position: 2,
  color: 'Blue',
  weight: 5,
};

const result = compare(topObject, bottomObject);

