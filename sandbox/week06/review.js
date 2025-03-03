// basics
// Function forms
// Callbacks
// Array methods
// Fetch
// DOM and Events

// const used most often, triple = used most often/is safest option
const myNum = 3;
if(myNum === 1);


// function declaration - can be called before function is called
function double(x) {
    return x * 2;
}

// function expression - cannot be called before being called
const double2 = function (x) {
    return x * 2;
}

double2(2);


// arrow function - works both ways written bellow
const double3 = (x) => {
    return x * 2;
}

const double4 = (x) => x * 2;


const myList = [1,2,3,4];
function modifyList(list, action) {
    const doubled = [];
    list.forEach((item) => {
        doubled.push(action(item));
    })
    return doubled;
}

const newList = modifyList(myList, double4);

// does the same thing as above
const newlist2 = myList.map(double4);


// fetch
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

async function getData(url) {
    const response = awati fetch(baseUrl + url);
    console.log(response);
    return response.json();
}

getData("ditto");