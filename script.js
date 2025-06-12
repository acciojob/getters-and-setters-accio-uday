//complete this code
class Person {
	const person = new Person("John", 25);
	console.log(person.name);
	console.log(person.age);
}

class Student extends Person {
	const student = new Student("John", 25);
	student.study();
}

class Teacher extends Person {
	const teacher = new Teacher("John", 30);
	teacher.teach();
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
