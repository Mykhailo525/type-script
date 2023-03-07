//--Конспект - див код
// interface IShape {
//     area: ()=> number;
//     perimeter: () => number
// }
//
// interface IGreeting {
//     greeting: (name: string) => void;
// }
//
// class Rectangle implements IGreeting, IShape {
//     constructor(private a: number, private b: number) {
//     }
//
//     greeting(name: string): void {
//
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
//
// }
//
// class Triangle implements IShape {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
//
// }
//
// const shapes: IShape[] = [new Rectangle(1, 2), new Triangle(1, 2, 3), new Rectangle(4, 5)]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

