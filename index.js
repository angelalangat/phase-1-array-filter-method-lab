function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase() === name.toLowerCase()
    );
    
    return matchingDrivers;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

console.log(findMatching(drivers, 'Bobby')); 

function fuzzyMatch(drivers, letters){
    const matchingLetters = drivers.filter(driver => driver.startsWith(letters));
    return matchingLetters;

}
console.log(fuzzyMatch(drivers, 'bb'));

function matchName(drivers, name) {
    const matchingName = driversArray.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    );
    
    return matchingName;
}
const driversArray = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

console.log(matchName(drivers, 'Bobby'));

