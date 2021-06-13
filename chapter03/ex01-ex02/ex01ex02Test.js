/**
 * 01. 리스트의 모든 요소보다 클때만 요소를 삽입하는 함수. => appendIfMax
 * 02. 리스트의 모든 요소보다 작을 때만 요소를 삽입하는 함수. => appendIfMin
 */
import {List} from "../List.js"

let intList = new List();
let funcMax = function (newElement, listElement) {
    return newElement <= listElement
};
let funcMin = function (newElement, listElement) {
    return newElement >= listElement
};

console.log('=== 최대 기준으로 삽입 ===');

intList.append(1);
intList.append(2);
intList.append(3);
intList.append(4);
intList.append(5);

intList.appendIf(-1, funcMax);
intList.appendIf(5, funcMax);
intList.appendIf(6, funcMax);
intList.displayList();


let stringList = new List();
stringList.append('1t');
stringList.append('2t');
stringList.append('3t');
stringList.append('4t');
stringList.append('5t');

stringList.appendIf('5z', funcMax);
stringList.appendIf('6t', funcMax);

stringList.displayList();


console.log('=== 최소 기준으로 삽입 ===');

let minIntList = new List();

minIntList.append(10);
minIntList.append(20);
minIntList.append(30);
minIntList.append(40);
minIntList.append(50);

minIntList.appendIf(15, funcMin);
minIntList.appendIf(5, funcMin);
minIntList.appendIf(50, funcMin);

minIntList.displayList();


let minStringList = new List();

minStringList.append('a10');
minStringList.append('a20');
minStringList.append('a30');
minStringList.append('a40');
minStringList.append('a50');

minStringList.appendIf('a15', funcMin);
minStringList.appendIf('a5', funcMin);
minStringList.appendIf('a50', funcMin);
minStringList.appendIf('a09', funcMin);

minStringList.displayList();