export function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
    this.toString = toString;
}

function toString() {
    return "[성함]:" + this.name + ", [영화]:" + this.movie;
}