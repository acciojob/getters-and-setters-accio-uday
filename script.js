//complete this code
class Person {
	constructor(John, 25){
	this.name=name;
	this.age=age;	
}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying.`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.John} is teaching.`);
	}
}

const person = new Person("John", 25);
console.log(person.name);
console.log(person.age);

const student = new Student("John", 25);
student.study();

const teacher = new Teacher("John", 30);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
