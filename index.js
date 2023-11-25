// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
};
returnFirstTwoDrivers(drivers);


const returnLastTwoDrivers = function() {
    return drivers.slice(2,4);
}
returnLastTwoDrivers(drivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {

    return function fareRide(fare) {
        return fare * multiplier;
    };
};


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers){

    return selectingDrivers(drivers);
};
