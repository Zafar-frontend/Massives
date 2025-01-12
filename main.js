// Тернарный оператор и условие if

// let number = prompt("Введите число");
// number>10 ? alert("Число больше 10") : number == 10 ? alert("Число равно 10"): alert("Число меньше 10");
// if (number > 10) {
//   alert("Число больше 10");
// } else {
//   if (number == 10) {
//     alert("Число равно 10");
//   } else {
//     alert("меньше 10");
//   }
// }

// let month = prompt("Введите месяц")

// switch (month.toLowerCase()) {
//     case "январь":
//     case "февраль":
//         alert("Зима")
//         break;
//     case "март":
//     case "апрель":
//     case "май":
//         alert("Весна")
//         break;
//     case "июнь":
//     case "июль":
//     case "август":
//         alert("лето")
//         break;
//     case "сентябрь":
//     case "октябрь":
//     case "ноябрь":
//         alert("Осень")
//         break;
//     case "декабрь":
//         alert("Зима")
//         break;

//     default:
//         alert("Нет такого времени ")
//         break;
// }

// let arrNum = [1,2,3,4,5,6]
// // Выводим в консоль наш массив
// console.log(arrNum);

// // Методы добавления и удаления элементов Массива

// // добавляем в конец нашего массива элемент true
// arrNum.push(true);
// console.log(arrNum);

// // добавляем в начало нашего массива элемент Hello
// arrNum.unshift("Hello")
// console.log(arrNum);

// // удаляем последний элемент моего массива
// arrNum.pop()
// console.log(arrNum);

// // удаляем первый элемент моего массива
// arrNum.shift()
// console.log(arrNum);

// Работа с элементами массива

// let arrNum = [1, 2, 3, 4, 5, 6];

// // //Выводим элемент массива в консоль через его индекс
// console.log(arrNum[4]);
// console.log(arrNum.at(4));

// // // Изменяем значение элемента массива

// arrNum[2] = "two";
// console.log(arrNum);

// let arrMatrix = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, "five", 6,[1, 2, "three", 4, 5, 6],],
//     [1, 2, 3, 4, 5, 6],
// ]
// console.log(arrMatrix[3][6][2]);
// arrMatrix[3][6][2]=3
// console.log(arrMatrix[3][6][2]);

// Работа с методом массива forEach
// let arrMatrix = [1,2,3,4,5];
// arrMatrix.forEach((elem,index,arrMatrix)=>{
//   //  console.log( elem[index]="Значения массива равна = " + elem);
//   //  console.log(elem[index]= `Значения массива равна = ${elem} массива ${arrMatrix}`);
// })

// Работа с методами массива find и findIndex

// let arrNum = [1,2,3,4,5];
// arrNum.find((item,index,arr)=>{
//   console.log (item=== 5);
// })
// // Метод который возврашает значение если элемент найден

// // let value =arrNum.find((item,index,arr)=>{
// //     return item=== 5;
// //  })
// //  console.log(value);
// // let value =arrNum.findIndex((item,index,arr)=>{
// //   return item=== 57;
// // })
// console.log(value);
// // Метод который возврашает индекс элемента если элемент найден

// let value =arrNum.findIndex((item,index,arr)=>{
//   return item=== 5;
// })
// let valueIndex =arrNum.findIndex((item,index,arr)=>{
//    return item=== 57;
// })
// console.log(valueIndex);

// Методы сортировки массива Sort
// let arr = [33,0,99,-1,88,7,5]

// let arrSort = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arrSort);

// let arrSort2 =  arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arrSort2);



