function count(p) {
    for (let n = 0; n <= p; n++ ) {
        console.log(n);
    }
}
count(10)

function selectEven_odd(p) {
    for (let n = 0; n <= p; n++ ) {
        if(n % 2 == 0) 
            {
        console.log(n + " is an even number");
        } else {
        console.log(n + "is n od number")
        }
    }
}

selectEven_odd(100);

const students = ["great", "mmesoma", "rowland", "wisdom",  "precious", "promise", "praise", "david", "caleb", "sampson", "divine",
    "david", "chioma", "austin", "uzoma"];

    function searchStudent(searchItem) {
        let searchData = searchItem.toLowerCase();
        console.log(searchItem);
        console.log(searchData);
        if (searchItem == searchData){
            console.log("student exist")
        
    }
}

    searchStudent("GreAt");
    searchStudent("ROWland");
    searchStudent("austin");


    let searchInput=document.getElementByid("search")
    let searchBtn=document.getElementByid("student")
    let resultElem=document.querySelector("student1")
