/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


// === DOM Elements ===
const $app = document.querySelector("#app");


// === Functions ===


//state array
const arrFreelancers = [];


//sets up the web page before we do anything
const main = () => {
    console.log("I am in the main function");
    const $header = document.createElement("h1");
    $header.textContent = "This is the number of Freelancers available"
    //call this one on an increment freeLancers();
    $app.append($header);
    $app.innerHTML = 
    `
    <h1> Freelancers!</h1>
    <div id="display"></div>

    `;
}


// this is the DOM creating the items and display it
const freelancerDisplayer = (freelancer) => {
    const $div = document.createElement("div");
    const $h3 = document.createElement("h3");
    const $a = document.createElement("a");
    //how do I get this to update so it is actually the freelancer from the list
    $h3.textContent = freelancer;
    $div.append($h3);
    $div.append($a);
    return $div;
}


//creates the worker
const genFreelancers = () => {
    const workerName = NAMES[Math.floor(Math.random() * NAMES.length)];
    const workerJob = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const workerSalary = Math.floor(Math.random(PRICE_RANGE.min) * PRICE_RANGE.max);
    let freelancer = {
        "workerName": workerName,
        "workerJob": workerJob,
        "salary": workerSalary

    };
    return freelancer;
}

//freelancer displayer gets called here
const addFreelancers = () => {
    const freelancer = genFreelancers();
    console.log(freelancer)
    arrFreelancers.push(freelancer)
    const $dom = freelancerDisplayer(freelancer);
    document.querySelector('#display').appendChild($dom)

}

//const freelancers = document.querySelector("#app") (

//)

main();

setInterval(addFreelancers, 2000)
