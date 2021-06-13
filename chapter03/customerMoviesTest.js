import {List} from "./List.js"
import {checkOut, createArr} from "./util.js"

let customers = new List();

let movies = createArr('./movieRank.txt');
let movieList = new List();

for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

console.log("=== 대여 가능한 영화 목록 ===");
movieList.displayList();

checkOut("터프가이", "13. 도라에몽:스탠바이미 2", movieList, customers);

console.log("=== 고객 랜탈 목록 ===");
customers.displayList();