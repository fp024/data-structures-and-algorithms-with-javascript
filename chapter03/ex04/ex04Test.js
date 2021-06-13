/**
 * 04. 고객이 대여한 영화를 되여된 영화 리스트로 추가
 *     고객에 대여할 때마다 대여된 영화 리스트를 출력
 */
import {List} from "../List.js"
import {checkOutEx04, createArr} from "../util.js"

let customers = new List();

let movies = createArr('../movieRank.txt');
let movieList = new List();
let rentalList = new List();

for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

checkOutEx04("터프가이", "13. 도라에몽:스탠바이미 2", movieList, customers, rentalList);
checkOutEx04("다크나이트", "13. 도라에몽:스탠바이미 2", movieList, customers, rentalList);
checkOutEx04("노진구", "19. 내겐 너무 소중한 너", movieList, customers, rentalList);

console.log("=== 대여 고객 목록 ===");
customers.displayList();
