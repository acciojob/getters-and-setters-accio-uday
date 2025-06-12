//complete this code
class Person {
	constructor(John, 25);
	console.log(person.name);
	console.log(person.age);
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

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
