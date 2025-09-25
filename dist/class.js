"use strict";
class Person {
    constructor(name, age, gender, point) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.point = point;
    }
    say() {
        return `hello ${this.name}`;
    }
}
const p1 = new Person("hoadv", 36, true, 10);
const result = p1.say();
console.log(result);
console.log(p1.name);
// Ke thua: extends
class User extends Person {
    constructor(name, age, gender, point, role) {
        super(name, age, gender, point); // super goi tu cha
        this.role = role;
    }
    //override: ghi de method cua cha
    say() {
        return `xin chao ${this.name}`;
    }
}
const u1 = new User("hoadv", 36, true, 10, "admin");
u1.name;
console.log(u1.say());
