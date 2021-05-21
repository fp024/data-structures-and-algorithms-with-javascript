// 2.9 연습문제
/*
    3. 이차원 배열을 이용해 월간 온도 자료를 저장하도록 weeklyTemps 객체를 고치시오.
    월간 평균, 지정한 주의 평균, 모든 주의 평균을 출력하는 함수를 만드시오?

    이 문제는 달력 라이브러리를 사용하는 것이 낫지 않을지?
    너무 자세하게는 생각하지 말고, 주(week) 별로 일간 온도를 저장하게만 해보자.
 */

function monthTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
    this.averageAll = function () {
        let total = 0;
        let days = 0;

        for (let weekTemps of this.dataStore) {
            days += weekTemps.length;
            for (let dayTemp of weekTemps) {
                total += dayTemp;
            }
        }

        return total / days;
    };
}

// 일부러 인덱스 0은 비워두고 프로그램 로직을 간단하게 하는게 낫다고도 하는데..
function add(weekIndex, weekTemps) {
    this.dataStore[weekIndex - 1] = weekTemps;
}

function average(weekIndex) {
    let total = 0;
    for (let data of this.dataStore[weekIndex - 1]) {
        total += data;
    }
    return total / this.dataStore[weekIndex - 1].length;
}


let monthWeek = new monthTemps();

monthWeek.add(1, [30, 20, 25, 30, 29, 20, 31]);
monthWeek.add(2, [31, 25, 27, 29, 29, 20, 31]);
monthWeek.add(3, [24, 26, 29, 24, 23, 20, 27]);
monthWeek.add(4, [28, 23, 25, 27, 29, 25, 26]);

for (let i = 1; i <= 4; i++) {
    console.log("week" + i + ":",monthWeek.average(i).toFixed(2));
}

console.log("month:", monthWeek.averageAll());

/*
    week1: 26.43
    week2: 27.43
    week3: 24.71
    week4: 26.14
    month: 26.178571428571427
 */