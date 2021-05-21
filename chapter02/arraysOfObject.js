// 2.7 객체를 요소로 포함하는 배열

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function displayPts(pointArray) {
    for (const arr of pointArray) {
        console.log(arr.x + ", " + arr.y);
    }
}


let p1 = new Point(1, 2);
let p2 = new Point(3, 5);
let p3 = new Point(2, 8);
let p4 = new Point(4, 4);

let points = [p1, p2, p3, p4];

for (let i = 0; i < points.length; i++) {
    console.log("Point " + (i + 1) + ": " + points[i].x + ", " + points[i].y);
}
/*
    Point 1: 1, 2
    Point 2: 3, 5
    Point 3: 2, 8
    Point 4: 4, 4
*/

let p5 = new Point(12, -3);
points.push(p5);
console.log("After push: ");

displayPts(points);
/*
    After push:
    1, 2
    3, 5
    2, 8
    4, 4
    12, -3
*/

points.shift();
console.log("After shift: ");
displayPts(points);
console.log(points); // node에서는 내부가 보인다.
/*
    After shift:
    3, 5
    2, 8
    4, 4
    12, -3
    [
      Point { x: 3, y: 5 },
      Point { x: 2, y: 8 },
      Point { x: 4, y: 4 },
      Point { x: 12, y: -3 }
    ]
*/
