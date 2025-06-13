// Basic class code
class Person {
	constructor(name, age){
	this._name = name;
	this._age = age;	
}

	// Getter for name
	get name(){
		return this._name;
	}

	// Setter for age
	set age(value){
		return this._age;
	}
}

//Sub class: Student
class Student extends Person {
	study() {
		console.log(`${this.name} is studying`);
	}
}

// Sub class: Teacher
class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;


















