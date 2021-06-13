import {List} from "./List.js"
import {createArr} from "./util.js"

let movies = createArr('./movieRank.txt');
let movieList = new List();

for (let i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

movieList.displayList(movieList);