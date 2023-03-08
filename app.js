// interface ITest{
//     readonly id:number;
//     color?:string;
//     size:{
//         width:number;
//         high:number;
//     }
// }
//
//
// interface RectWithArea extends ITest{
//     getArea:()=>number
// }
//
// const rect:RectWithArea={
//     id:5,
//     size:{
//         width:10,
//         high:12,
//     },
//     getArea():number{
//         return this.size.width * this.size.high
//     }
// }
//
// console.log(rect.getArea());
var arrayOfNumbers = [1, 1, 2, 3, 4, 5, 6, 7, 9, 0];
var arrayOfStrings = ['1', '1', '2', '3', '4', '5', '6', '7', '9', '0'];
function reverse(array) {
    return array.reverse();
}
console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));
