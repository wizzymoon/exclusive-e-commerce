
// const students = ["great", "mmesoma", "rowland", "wisdom",  "precious", "promise", "praise", "david", "caleb", "sampson", "divine",
//     "david", "chioma", "austin", "uzoma"];




//     function searchStudent() {
//         // let searchItem = prompt("Search student here");
//         let searchItem = searchInput.value;
//         let searchData = searchItem.toLowerCase();
//         let found = false;
//         // console.log(searchItem);
//         // console.log(searchData);
//         for (let i = 0; i < students.length; i++){
//         if (students[i]  === searchData){
//           found = true;

//           if(found) { 
//             alert(students[i] + "is our student");
//           } else {
//             alert("Not our student");
//           }
//         }
//         }
//     }

//     searchStudent();

   
let searchInput = document.getElementById("search-sect");
let searchbtn = document.getElementById("search-btn");
let resultElem = document.querySelector(".span-text");
const names = ["great", "mmesoma", "rowland", "wisdom",  "precious", "promise", "praise", "david", "caleb", "sampson", "divine",
    "david", "chioma", "austin", "uzoma"];
    function searchNames() {
    let searchItem = searchInput.value;
   console.log(searchItem);
    if (names.includes(searchItem)){
        resultElem.innerHTML = "student exists!"
        resultElem.style.color = "green"
    } else {
        resultElem.innerHTML = "student not exists!"
        resultElem.style.color = "red"

    }

}

 