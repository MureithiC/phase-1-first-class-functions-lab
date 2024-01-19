// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers from the passed-in array
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array containing driver functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // Function to double fares
  const fareDoubler = createFareMultiplier(2);
  
  // Function to triple fares
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers based on a provided function
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  