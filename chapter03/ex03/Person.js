export function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.toString = toString;
}

function toString() {
    return "[이름]:" + this.name + ", [성별]:" + this.gender;
}