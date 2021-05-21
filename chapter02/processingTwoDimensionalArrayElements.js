// 2.6.2 이차원 배열요소 처리하기

let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89, 99]];
let total = 0;
let average = 0.0;

// 이차원 배열을 row 중심으로 처리
for (let row = 0; row < grades.length; row++) {
    /*
    for (let col = 0; col < grades[row].length; col++) {
        total += grades[row][col];
    }
    */
    for (let col of grades[row]) {
        total += col;
    }

    average = total / grades[row].length;
    console.log("Student " + (row + 1) + " average: " + average.toFixed(2));

    total = 0;
    average = 0;
}
/*
Student 1 average: 81.33
Student 2 average: 79.67
Student 3 average: 93.25
*/

// 이차원 배열을 col 중심으로 처리

grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];  // 로직상 정사각형 형태의 배열만 가능
console.log(grades);
/*
[
  [ 89, 77, 78 ],
  [ 76, 82, 81 ],
  [ 91, 94, 89 ]
]
*/


for (let col = 0; col < grades.length; col++) {
    for (let row = 0; row < grades[col].length; row++) {
        total += grades[row][col];
    }

    average = total / grades[col].length;
    console.log("Test " + (col + 1) + " average: " + average.toFixed(2));

    total = 0;
    average = 0;
}

/*
    Test 1 average: 85.33
    Test 2 average: 84.33
    Test 3 average: 82.67
 */

