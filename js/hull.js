// const storeProduct = [
//     {
//         id: 1,
//         imgPath: "./hull/love.png",
//         description: "Loveseat sofa",
//         price: "$199"
//     },
//     {
//         id: 2,
//         imgPath: "./hull/lamp.png",
//         description: "Table lamp",
//         price: "$24.99"
//     },
//     {
//         id: 3,
//         imgPath: "./hull/table.png",
//         description: "Beige Table Lamp",
//         price: "$24.99"
//     },
//     {
//         id: 4,
//         imgPath: "./hull/basket.png",
//         description: "Loveseat sofa",
//         price: "$34.12"
//     },
// ]

// let containerElem = document.getElementById("new");

// //mapping through an array
// storeProduct.map((product) => {
//     containerElem.innerHTML += `
//    <div class="">
//         <img src=${product.imgPath} alt="" class="card-img">
//         <h4 class="card-discription">${product.description} </h4>
//         <p class="card-price">${product.price}</p>
//         </div>
// `
// })   


// const names = [
//     "wisdom", "destiny", "rowland", "precious", "promise", "great", "henry", "goodluck", "daniel", "slyvia",
// ]
// names[0] = "johnson";
// names.push("gift", "favour");
// names.pop();
// names.unshift("treasure");
// names.shift("glory");
// names.reverse();
// let selectedNames = names.slice(1, 4);
// const ulElem = document.getElementById("student-list");
// selectedNames.map((item) => {
//     ulElem.innerHTML += `
//     <li>${item}</li>`
// })

// const footballClubs = [
    
// ]

const countDownBox = document.querySelector(".countdown")
const countDownDays = document.getElementById("days");
const countDownHours = document.getElementById("hours");
const countDownMinutes = document.getElementById("minutes");
const countDownSeconds = document.getElementById("seconds");

// create the countdown end date and time 
const endDate = new Date("2025-01-31T00:00:00Z").getTime();

// function to update the countdown
function updateCountdown() {
    // Get the current time now
    const now = new Date().getTime();

    // calculate the time left 
    const timeLeft = endDate - now;

    // calculate the days left 
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // calculate the hours left
    const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // calculate the minutes left
    const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    // calculate for seconds left
    const seconds = Math.floor(timeLeft % (1000 * 60) / (1000));

    // pass the stored values of days, hours, mins and seconds to their respective elements 
    countDownDays.innerHTML = `${days} `;
    countDownHours.innerHTML = `${hours.toString().padStart(2, "0")} `;
    countDownMinutes.innerHTML = `${minutes.toString().padStart(2, "0")} `;
    countDownSeconds.innerHTML = `${seconds.toString().padStart(2, "0")}`;

    // if countdown has finished OR endDate
    if (timeLeft <= 0) {
        // clear any existing interval 
        clearInterval(countdownInterval);
        countDownBox.innerHTML = "countdown has ended";
    }

};
//  running the updatecount function every second using setInterval 
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();