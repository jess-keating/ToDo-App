class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    speakName() {
        console.log(`My name is ${this.name}`);
        return this.name;
    }

    getAge() {
        console.log(`My age is ${this.age}`);
        return this.age;
    }

    use() {
        console.log(`Using the student class`);
    }
} // Close the Student class here

// Now instantiate and use
const student1 = new Student("001", "Pedro", 30);
const student2 = new Student("002", "Jessica", 25);
student1.speakName();
student1.use();
student2.speakName();
student2.use();

class Car {
    constructor(make, model) {
        // ...
    }
}