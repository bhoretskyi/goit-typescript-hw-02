/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(data: T) {
  return new Promise<T>((resolve) => {
    resolve(data);
  });
}

getPromise<[string, number]>(['Text', 50])
  .then((data) => {
    console.log(data);
  });
