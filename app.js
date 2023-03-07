var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.greeting = function (name) {
    };
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.area = function () {
        return this.a * this.b * this.c;
    };
    Triangle.prototype.perimeter = function () {
        return this.a + this.b + this.c;
    };
    return Triangle;
}());
var shapes = [new Rectangle(1, 2), new Triangle(1, 2, 3), new Rectangle(4, 5)];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
