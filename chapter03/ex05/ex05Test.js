/**
 * 05. 비디오 대여 상점에서 반납한 수 추가
 *     고객이 영화를 반납하면 대여된 영화 리스트에서 영화를 삭제한 다음 이용할 수 있는 영화리스트로 추가
 */
import {List} from "../List.js"
import {checkInEx05, checkOutEx04, createArr} from "../util.js"

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

checkInEx05("터프가이", "13. 도라에몽:스탠바이미 2", movieList, customers, rentalList);
console.log("=== 터프가이의 도라에몽 반납 후 대여 고객 목록 ===");
customers.displayList();

checkInEx05("노진구", "19. 내겐 너무 소중한 너", movieList, customers, rentalList);
console.log("=== 노진구의 내겐 너무 소중한 너 반납 후 대여 고객 목록 ===");
customers.displayList();
