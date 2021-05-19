/**
 * 2.3.1 값 검색하기
 *
 * putstr(), readline() 은 SpiderMonkey 전용 함수
 */
let names = ["aaa", "bbb", "ccc", "ddd", "eee", "ddd"];
putstr("Enter a name to search for: ");
let name = readline();
let position = names.lastIndexOf(name);
if (position >= 0) {
    console.log(name + " at position : " + position);
} else {
    console.log(name + " is not found.");
}

/*
    > Executing task: C:\jsshell-win64\js.exe -w -m searchingValue.js <
    
    Enter a name to search for: ccc
    ccc at position : 2
 */

// lastIndexOf()
//    배열에서 일치하는 값 중 마지막 인자의 위치, 그냥 indexOf()는 일치하는 첫번째 요소의 인덱스 반환

/*
    > Executing task: C:\jsshell-win64\js.exe -w -m searchingValue.js <

    Enter a name to search for: ddd
    ddd at position : 5

 */