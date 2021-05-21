// 2.8 객체에 포함된 배열

function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    let total = 0;
    for (let data of this.dataStore) {
        total += data;
    }
    return total / this.dataStore.length;
}

let thisWeek = new weekTemps();

thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);

console.log(thisWeek.average()); // 54.875
