// let box = 100;
// let firstName = "Wisdom";
// let year = 2024;
// let lastName = "Azundah";

// year = 2004;

// let fullName = firstName + lastName;
// console.log(fullName);

// let x = 50 + "Cent";
// console.log(x);
// typeof(x)
// console.log(typeof x);

// let y = "Lexus" + 3 + 50;
// alert(y);
//strings:
// let message ="He said,'Jesus wept'";
// let fullName1 = `${firstName} ${lastName}`;
// console.log(fullName1)

// let Name = "Wisdom";

// let facilty = "TechCreek";

// let course = "Frontend web development";

// let sentence = Name +" "+ "studies" +" "+ course +" "+ "at" +" "+ facilty;
// let sentence = `${Name} studies ${course} at ${facilty}`;
// console.log(sentence);

// const myUser = {
//     firstName:"Wisdom",
//     lastName:"Azundah",
//     yearOfBirth:2006,
//     eyeColor:"brown",
//     course:"Frontend web development",
//     facilty: "TechCreek",
//     printfullName: function() {
//         return this.firstName +" "+ this.lastName;
//     }
// };

// myUser.friends = [
//     "Wisdom",
//     "Destiny",
//     "Promise",
//     "Great",
//     "Roland",
// ];

// console.log(myUser.friends[4])

// const trap = [1,2,[true,"age"]];
// console.log(trap[2][0])

// console.log(myUser.printfullName())

// let myfullname = myUser.printfullName();
// console.log(myfullname);


// myUser.printAge = function() {
//     return 2024 + myUser.yearOfBirth;
// }
// console.log(myUser)
// let Age = 2024 -  myUser.yearOfBirth;
// console.log(Age);

// myUser.stateOforigin = "Rivers state";
// console.log(myUser)

// myUser["local gorvenment area"] = "Rivers state";
// console.log(myUser);

// myUser["local gorvenment area"]
// console.log(myUser)

// const number = [
// 1,
// 2,
// 3,
// 4,
// 5,
// 6,
// 7,
// 8,
// 9,
// 10,
// ];

// const name = [
//     "Wisdom",
//     "Destiny",
//     "Promise",
//     "Great",
//     "Roland",
// ];




// let price = 300;
// // price++
// // price == equity
// // == stict equlity (calue & data type)
// // !== not equal (not equal value)
// //!== not strickly equal

// x = 2 != "2";//
// x = 2 === "2";//
// x = 2 !== "2";//
// x = 2 !== 2;//
// x = true !== 1;
// y = null === undefined;
// y = null == undefined;

// t = 10 <= 5;
// F = 3 > 4;

// LOGICAL OPERATROS
// AND &&
// OR ||
// NOT !
// Mullish Coalescing ??

// OR // if any of its operands is true; it results to true
//otherwise it results to fasle

// alert(true || false); // true
// alert(false || false);// false
// alert(true || true); // true
// alert(false || true);// true

// alert(1 || 0) // true

// let min = 30;
// if( min < 40 | min > 45){
//     console.log("hey")
// }

// // alert(null || 1);


// // AND // if any of its operandss is false; it results to false
// //otherwise it results to true
// alert(true && false); // false
// alert(false && false);// false
// alert(true && true); // true
// alert(false && true);// false


// let h = 11;
// let m = 20;
// if(h == 11 && m == 20){
//     console.log("The time is 11:20")
// }

// if(1 && 0){
//     alertlert("Is it falsy OR truthy")
// }

// alert(1 && 5);// 5
// alert(null && 5); // null
// alert(0 && "hey")


// // NOT !
// // converts the operand to a boolean type
// // returns the inverse value

// alert(!true); // fasle
// alert(!0); // true
// alert(!null); // true
// alert(!"hey"); // false
// alert(!!5); // true

// alert(null || 2 || undefined); // 2
// alert(1 && null && undefined); //null

// alert(null || 2 && 3 || 5 ); // 
// //AND && has a higher precedence than OR
// alert(null || -1 && 1);//

// let bill = prompt("enter bill");
// console.log(bill);

// if(bill < 10000) {
//     alert("no discount");
// }
// if(bill < 10000) {
//     alert("no discount");
// }
// if(bill < 10000) {
//     alert("no discount");
// }
// if(bill < 10000) {
//     alert("no discount");
// }


// function sum(){
//    let a = 5;
//    let b = 8;
//    let c = a + b;
//    console.log(c);
// }

// let text = "Tinubu"
// function showmessage(text){
//     alert(`hello ${text}`);
// }

// showmessage("Roland");
// showmessage("Moffi");
// showmessage("Wisdom");

let text = "Tinubu";
function showmessage(){
     text = "JohnBull"
    console.log("hello"+" "+text);
}

console.log(text);
showmessage()
console.log(text);
console.log(text);

let customer = ["Caleb","David","Chinazo","Wisdom"]
function sendMessage(sender,customerName,message){
    console.log(`${sender}: hello ${customerName}, ${message} ${sender} `)
}

sendMessage("UBA",customer[1],"wishes you a happy new year")
sendMessage("FCMB",customer[3],"wishes you a happy new year")

function mulNum(x,y){
    let product = x*y;
    // return product;
    console.log(product);
    return product;
    console.log(product);
}

let p = mulNum(5,4);

console.log(p);


function diff(c, d) {
    let result = c - d;
    console.log(result);
    return result;
}
let x = diff(5, 86)

function sum(e, f) {
    let result = e + f;
    console.log(result);
    return result;
}
let y = sum(60, 18)

function quotient(g, h) {
    let result = g / h;
    console.log(result);
    return result;

}
let z = quotient(90, 2);

function quotient(r, s) {
    let result = r * s;
    console.log(result);
    return result;

}
let n = quotient(15, 8);


function sumTotal(x, y, z) {
    let sumTotal = x + y + z + n;
    console.log(sumTotal);
}
sumTotal(x, y, z);

const Student = [
    "Wisdom",
    "Roland",
    "Great",
    "Moffi",
    "Promise",
    "Codeplay",
    "David",
    "Destiny",
    "Frank",
    "Caleb"
]

for(let item=0; item<Student.length+1; item++){
    console.log(Student[item]);
}

const flowers = ["jasmine", "lavender", "primrose", "hibiscus"];

function sendBirthday(sender, message, customer){
    console.log(`${sender}: hello ${customer}, ${sender} ${message}`);
}

for(let i = 0; i < flowers.length +1; i++){
    sendBirthday("Union Bank", "Wishes you a Happy Birthday!", flowers[i]);
}




















