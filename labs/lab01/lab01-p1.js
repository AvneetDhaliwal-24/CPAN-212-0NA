import lodash from "lodash";

//array of holiday object with name and date as key value pair for the properties
const holidays = [
    {
        name: "Christmas",
        date: new Date("2025-12-25") //date for christmas
    },
    {
        name: "Canada Day",
        date: new Date("2025-07-01") //date for canaday day
    },
    {
        name: "April Fools",
        date: new Date("2025-04-01") //date for april fools day
    },
];

let today = new Date(); //today's date

//iterating through holidays array using forEach loop to find and print the number of days until each holiday from today
holidays.forEach(holiday => {
    let dateDifference = holiday.date - today; //finding the difference
    console.log(Math.ceil(dateDifference/(1000*60*60*24)));
});

let randomHoliday = lodash.sample(holidays); //using lodash to get a random holiday object from the holidays array
console.log(randomHoliday); //printing the random holiday

//Index for all the holidays
//Christmas @ index 0
//Canada Day @ index 1
//Aprils fool @ index 2
console.log(lodash.findIndex(holidays, {name: "Christmas"})); //finding index of christmas using lodash's findIndex method
console.log(lodash.findIndex(holidays, {name: "Canada Day"})); //finding index of Canada Day using lodash's findIndex method

//JWTs - 