import { List } from "./List.js"

let names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");

console.log(names.toString());

names.remove("Raymond");

console.log("Raymond 삭제 후: " + names.toString());

