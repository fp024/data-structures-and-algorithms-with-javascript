import {List} from "./List.js"

let names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement());  // Clayton

names.next();
console.log(names.getElement());  // Raymond

names.next();
names.next();
names.prev();

console.log(names.getElement());  // Cynthia

console.log("반복자를 이용해 리스트 처음부터 탐색 - for");

for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
    if (!names.hasNext()) {
        break;
    }
}


console.log("반복자를 이용해 리스트 처음부터 탐색 - do~while");
names.front();
do {
    console.log(names.getElement());
} while (names.next())


console.log("반복자를 이용해 리스트 끝부터 처음까지 탐색");
for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
    if (names.currPos() == 0) {
        break;
    }
}
