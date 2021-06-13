import fs from 'fs';
import {Customer} from "./Customer.js";

export function createArr(file) {
    // toString()으로 String을 얻어야 split을 사용할 수 있다.
    let arr = fs.readFileSync(file).toString().split('\n');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
    return arr;
}


export function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        let c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
    } else {
        console.log("'" + movie + "'는 현재 대여할 수 없습니다. ");
    }
}


/**
 * 연습문제 4번 관련해서 추가
 */
export function checkOutEx04(name, movie, movieList, customerList, rentalList) {
    if (movieList.contains(movie)) {
        let c = new Customer(name, movie);
        rentalList.append(movie);
        customerList.append(c);
        movieList.remove(movie);
        console.log("=== 전체 대여 목록 ===");
        rentalList.displayList();
    } else {
        console.log("'" + movie + "'는 현재 대여할 수 없습니다. ");
    }
}


/**
 * 연습문제 5번 관련해서 추가
 */
export function checkInEx05(name, movie, movieList, customerList, rentalList) {
    if (rentalList.contains(movie)) {
        movieList.append(movie);
        rentalList.remove(movie);
        removeMoveInCustomerList(name, movie, customerList);
        console.log("=== 전체 대여 목록 ===");
        rentalList.displayList();
    } else {
        console.log("'" + movie + "'는 반납목록에 없습니다. ");
    }
}


function removeMoveInCustomerList(name, movie, customerList) {
    let equalFunc = function (listElement, element) {
        return listElement.name == element.name && listElement.movie == element.movie;
    };

    let customer = new Customer(name, movie)
    if (customerList.containsIf(customer, equalFunc)) {
        customerList.removeIf(customer, equalFunc);
    }
}