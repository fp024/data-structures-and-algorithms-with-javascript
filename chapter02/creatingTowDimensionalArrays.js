// 2.6.1 이차원 배열 만들기

let twod = [];
let row = 5;

for (let i = 0; i < row; i++) {
    twod[i] = [];
}

console.log(twod);
// [ [], [], [], [], [] ]
// n개의 행 1개의 열을 갖는 배열


// 더글라스 크락포드의 방법
// 행렬을 만드는 함수를 정의해서 Array 객체에 포함시킨것 같다.

Array.matrix = function (numRows, numCols, initial) {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        let columns = [];
        for (let j = 0; j < numCols; j++) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}


let nums = Array.matrix(5, 5, 0);
console.log(nums);
// 스파이더몽키 출력 (배열을 구분해서 출력해주지 않아서 아래와 같음.)
// 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

// node 출력
/*
[
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
]
 */

let names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names);
// 스파이더 몽키 출력
// ,,,,,Joe,,,
// node 출력
// [ [ '', '', '' ], [ '', '', 'Joe' ], [ '', '', '' ] ]


// 한줄로 이차원 배열 정의 및 초기화
let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
console.log(grades[2][2]); // 89 출력
