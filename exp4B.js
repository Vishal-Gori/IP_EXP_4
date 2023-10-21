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
  
  const person = new Person("John", 25);
  
  console.log(person.sayHello());
  console.log(person.greet());
  console.log(Person.isAdult(20)); 
  
  const student = new Student("Alice", 19, 123);
  
  console.log(student.sayHello());
  