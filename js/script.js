
//         var a = 100;
//         var b = 500;
//         let sum = a + b;
//         let first = "Abdul Salam";
//         let last = "Yussif";
// console.log(sum)
// console.log(first + last)

// let fullName = "Abdul Salam Yussif";
// let fullname = "Stephen Azaago";
// console.log(fullName)
// console.log(fullname)
// console.log("true or false:", "0"===0);
// let age = 27;
// alert("Hello, I am " + age + "years old");
// let Grade = 10;maths = 1;geography = 1
// alert("Mr Abdul Salam had aggregate" + Grade + ",mathematics was" + maths + "and geography too" + geography );
// function displayinfo(){
//     let res = prompt("what is your name");
// let ag = prompt("what is your age");
// let grade = prompt( "what is your aggregate");
// let sch = prompt("which school did you complete?")
// alert( "Hello, " + res + " you are " + ag + " .years old " + "your aggregate is " + grade +".you completed " + sch); 

// }
// displayinfo();
// let car ={
//     name : "Range Rover",
//     model :"Sports",
//     year : 2020,
//     used : true,
//     speed : 100,
//     start() {
//         return "vrummmm!!!";
//     },
// };

// alert(car.start());
// let person = {
    // age : 78,
    // name : "Alhassan",
    //  color : "fair",
    //  Height : 2,
    //  dead : false,

    //  sleep() {
    //      return "ssshhhhh!!!!";
    //  },

     

// }
// person.age =100;
// alert(person.age)
// alert(person.Height)
// alert(person.color)
// alert(person.dead)
// alert(person.sleep())

// let laptop = {
//     name : "LENOVO",
//     HDD : 500,
//     Windows : 10,
//     color : "black",
//     Boot : "on",

//     Start() {
//         return "Loading...."
//     }
// }
// alert(laptop.Windows)
// alert(laptop.name)
// alert(laptop.start())
// let score = [ 15, 20, 54, 44, 90];
// alert (score[0]);
// alert(score[4]);
// let myself = ["Yussif", 27, 7.5, "male"]
// alert(myself[3])
// alert(myself[2])
// let people = [
//     {name : "Abu", age = 27},
//     { name : "Akua", age = 56},
//     {name : "Ama", age =90},
// ];
// alert(people[2].name)

// let endOfTerm = {
//     scores : [50, 20, 85, 45],
//     subjects : ["maths", "english", "science"],
// };
// alert(endOfTerm.scores[1]);
// alert(endOfTerm.subjects[2])
// let age = 15;
// if ( age>15) {
//     alert("above 15")
// } else{
// alert("not above 15")
// }
// let date = new Date();

// alert(date.getMonth())
// alert(date.getTime())
// let grade = [57, 68, 55, 78, 40, 89]

// let sum = 0;
// alert("sum before loop:" + sum);

// for(k in grade) {
//    sum = sum + grade[k];
// }
// alert(sum)
// alert("sum after loop:" + sum);
let score = 0;
let num = 3;
while(true) {
    if( num % 3 === 0){
        let a = prompt("Please input a multiple");
        score += num;
        num = parseInt(a);
    }else {
            alert("Game over, your score: " + score);
            break;
        }
    }



