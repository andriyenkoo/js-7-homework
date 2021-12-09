// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1,'Oleg','Andriyenko','gmail','Kyivstar');
// console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let emptyArray = [
//     new User(0, 'Oleg', 'Andriyenko', 'gmail', 'K'),
//     new User(1,'name1','idk1','gmail','K'),
//     new User(3,'name3','idk3','gmail','K'),
//     new User(4,'name4','idk4','gmail','K'),
//     new User(5,'name5','idk5','gmail','K'),
//     new User(5,'name5','idk5','gmail','K'),
//     new User(6,'name6','idk6','gmail','K'),
//     new User(7,'name7','idk7','gmail','K'),
//     new User(8,'name8','idk8','gmail','K'),
//     new User(9,'name9','idk9','gmail','K'),
// ];
//
// console.log(emptyArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let emptyArray = [
//     new User(0, 'Oleg', 'Andriyenko', 'gmail', 'K'),
//     new User(1,'name1','idk1','gmail','K'),
//     new User(3,'name3','idk3','gmail','K'),
//     new User(4,'name4','idk4','gmail','K'),
//     new User(5,'name5','idk5','gmail','K'),
//     new User(5,'name5','idk5','gmail','K'),
//     new User(6,'name6','idk6','gmail','K'),
//     new User(7,'name7','idk7','gmail','K'),
//     new User(8,'name8','idk8','gmail','K'),
//     new User(9,'name9','idk9','gmail','K'),
// ];
//
// let filterOfArray = emptyArray.filter((item) => {
//         if (item.id % 2 === 0) {
//             return item;
//         }})
//
// console.log(filterOfArray);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let emptyArray = [
//     new User(0, 'Oleg', 'Andriyenko', 'gmail', 'K'),
//     new User(1,'name1','idk1','gmail','K'),
//     new User(3,'name3','idk3','gmail','K'),
//     new User(4,'name4','idk4','gmail','K'),
//     new User(10,'name5','idk5','gmail','K'),
//     new User(5,'name5','idk5','gmail','K'),
//     new User(6,'name6','idk6','gmail','K'),
//     new User(7,'name7','idk7','gmail','K'),
//     new User(8,'name8','idk8','gmail','K'),
//     new User(9,'name9','idk9','gmail','K'),
// ];
//
// console.log(emptyArray.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let classArray = [
    new Client(1,'name1','idk1','gmail','K',['sweets','toys']),
    new Client(50,'name3','idk3','gmail','K',['toys']),
    new Client(13,'name4','idk4','gmail','K',['sweets','toys','games']),
    new Client(17,'name5','idk5','gmail','K',['alcohol','sweets','toys','games']),
    new Client(780,'name5','idk5','gmail','K',['alcohol','sweets','games']),
    new Client(3,'name6','idk6','gmail','K',['books','glasses']),
    new Client(5,'name7','idk7','gmail','K',['steam','glasses','toys']),
    new Client(90,'name8','idk8','gmail','K',['needle','drugs']),
    new Client(34,'name9','idk9','gmail','K',['arrays','hello']),
    new Client(64,'name10','idk10','gmail','K',['origin','fifa']),
]

console.log(classArray)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClass = classArray.sort((a, b) => a.order.length - b.order.length);

console.log(sortClass);
