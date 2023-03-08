// interface ITest{
//     readonly id:number;
//     color?:string;
//     size:{
//         width:number;
//         high:number;
//     }
// }
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

/////////////=///////////////////////=========================////////////////////////////////////////////

// const arrayOfNumbers:number[]=[1,1,2,3,4,5,6,7,9,0];
//
// const arrayOfStrings:string[]=['1','1','2','3','4','5','6','7','9','0']
//
//
// function reverse<T>(array:T[]):T[]{
//     return array.reverse()
// }
//
// console.log(reverse(arrayOfNumbers));
// console.log(reverse(arrayOfStrings));