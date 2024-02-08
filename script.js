var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point = new Point();
point.x = 1;
point.x = 3;
// class Rect { x1: number;  x2: number; y1: number; y2: number;}
// let rect: Rect=new Rect();
// rect.x1 = 1;
// rect.x2 = 3;
// rect.y1 = 9;
// rect.y2 = 6;
var Rect = /** @class */ (function () {
    function Rect(x, y) {
        this.MAX_COORD = 1000;
        this.x1 = x;
        this.x2 = x;
        this.y1 = y;
        this.y2 = y;
    }
    Rect.prototype.square = function () {
        return Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2);
    };
    return Rect;
}());
var rect1 = new Rect(10, 20);
rect1.x1 = 5;
rect1.x2 = 5;
