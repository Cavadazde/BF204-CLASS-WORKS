function Human(name, surname, age, isMale = true) {

    this.name = name,
        this.surname = surname,
        this.age = age,
        this.isMale = isMale,
        this.getFullName() = function () {
            return (this.surname[0] + "." + this.name).toUpperCase()
        }

}

function Student(university, faculty, major, degree, course, gpa = 0) {

    this.university = university,
        this.faculty = faculty,
        this.major = major,
        this.degree = degree,
        this.course = course,
        this.gpa = gpa,
        this.getId = function () {
            return (this.university.slice(0, 3) + "_" + this.faculty.slice(0, 2) + parseInt(Math.random) * 1000)

        }

}

let studentAysel = new Student("BDU", "History", "History Teacher", "bachelor", 4, 90.6);
let studentAytac = new Student("AZTU", "Math", "History Teacher", "bachelor", 1, 80.6);
let studentAydan = new Student("ADNSU", "Finance", "History Teacher", "bachelor", 4, 92.6);
let studentLale = new Student("ATU", "Designer", "History Teacher", "bachelor", 3, 95.6);
let studentHumay = new Student("ADA", "Law", "History Teacher", "bachelor", 2, 98.6);


Object.SetPrototypeOf(studentAysel, new Student("Aysel", "Cavadzade", 19, false));
Object.SetPrototypeOf(studentAytac, new Student("Zakir", "Cavadzade", 19, true));
Object.SetPrototypeOf(studentAydan, new Student("Nicat", "Cavadzade", 19, true));
Object.SetPrototypeOf(studentLale, new Student("Sebuhi", "Cavadzade", 19, true));
Object.SetPrototypeOf(studentHumay, new Student("Ferid", "Cavadzade", 19, true));

let students = [studentAysel, studentAytac, studentAydan, studentLale, studentHumay];

console.log(studentAysel)
