// 2.9 연습문제
/*
    1. 객체에 학생들의 점수 집합을 저장하는 grades 객체를 만드시오, 접수를 추가하는 함수,
    학생의 평균을 출력하는 기능을 객체에 추가하시요.
 */

function Student(name, kor, eng, math) {
    this.name = name;
    this.scores = [kor, eng, math];
    this.toString = function () {
        return this.name + ' / ' + '국어: ' + kor + ", 영어: " + eng + ", 수학: " + math;
    }
}

function Grades() {
    this.students = [];
    this.add = add;
    this.average = average;
    this.printStudent = printStudent;
}

function add(student) {
    this.students.push(student);
}

function average(student) {
    let total = 0;
    for (const score of student.scores) {
        total += score;
    }
    return total / student.scores.length;
}

function printStudent() {
    for (const student of this.students) {
        console.log(student.toString() + " 평균:" + this.average(student).toFixed(2));
    }
}


let thisGrades = new Grades();
thisGrades.add(new Student('요리왕 비룡', 90, 80, 70));
thisGrades.add(new Student('요리왕 흑룡', 80, 100, 75));
thisGrades.add(new Student('다크 나이트', 92, 70, 95));

thisGrades.printStudent();
