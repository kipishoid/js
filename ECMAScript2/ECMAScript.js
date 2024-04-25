1.

class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`);
    }
  }
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
  book1.displayInfo();
  
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
  book2.displayInfo();
  

2.

  class Student {
    constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
  }
  
  const student1 = new Student("John Smith", 16, "10th grade");
  student1.displayInfo();
  
  const student2 = new Student("Jane Doe", 17, "11th grade");
  student2.displayInfo();