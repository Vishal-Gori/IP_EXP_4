class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      return `Hi, I'm ${this.name}, and I am ${this.age} years old.`;
    }
  
    greet = () => {
      return `Hello from ${this.name}!`;
    }
  
    static isAdult = (age) => {
      return age >= 18;
    }
  }
  
  class Student extends Person {
    constructor(name, age, rollNo) {
      super(name, age); 
      this.rollNo = rollNo;
    }
  
    sayHello() {
      if (this.rollNo <= 0) {
        throw new Error("Invalid roll number. Roll number must be greater than 0.");
      }
  
      return `Hi, I'm ${this.name}, a student with roll number ${this.rollNo}. I am ${this.age} years old.`;
    }
  }
  
  // 1. Using the new keyword:
  const person1 = new Person("John", 25);
  const student1 = new Student("Alice", 19, 123);

// 2. Using object literals (without classes):
const person2 = {
    name: "John",
    age: 25,
    sayHello: function() {
      return `Hi, I'm ${this.name}, and I am ${this.age} years old.`;
    },
  };
  
  const student2 = {
    name: "Alice",
    age: 19,
    rollNo: 123,
    sayHello: function() {
      if (this.rollNo <= 0) {
        throw new Error("Invalid roll number. Roll number must be greater than 0.");
      }
      return `Hi, I'm ${this.name}, a student with roll number ${this.rollNo}. I am ${this.age} years old.`;
    },
  };

  // Using Object.create() to set the prototype:
  const personPrototype = {
    sayHello: function() {
      return `Hi, I'm ${this.name}, and I am ${this.age} years old.`;
    },
  };
  
  const person3 = Object.create(personPrototype);
  person3.name = "John";
  person3.age = 25;
  
  const studentPrototype = Object.create(personPrototype);
  studentPrototype.sayHello = function() {
    if (this.rollNo <= 0) {
      throw new Error("Invalid roll number. Roll number must be greater than 0.");
    }
    return `Hi, I'm ${this.name}, a student with roll number ${this.rollNo}. I am ${this.age} years old.`;
  };
  
  const student3 = Object.create(studentPrototype);
  student3.name = "Alice";
  student3.age = 19;
  student3.rollNo = 123;