// 2.3.3 기존 배열을 이용해서 새 배열을 만들기

const gameDept = ["hong", "kim", "lee", "park", "song"];
const publishingDept = ["choi", "yoon", "kang"];

let itDiv = gameDept.concat(publishingDept);
console.log(itDiv);  // hong,kim,lee,park,song,choi,yoon,kang

itDiv = publishingDept.concat(gameDept);
console.log(itDiv); // choi,yoon,kang,hong,kim,lee,park,song

const totalDept = ["hong", "kim", "lee", "park", "song", "choi", "yoon", "kang"];
let gameDept01 = totalDept.splice(3, 3);
console.log(gameDept01); //  park,song,choi

console.log(totalDept);   // hong,kim,lee,yoon,kang
// totalDept가 const여서 에러날 줄 알았는데.. 참조는 그대로에 참조가 가리키는 내용이 바뀐 것이여서,
// 에러가 안났다보다.

