////////1//////////////
 function cleanname(array){
   return array.map(arr=>arr.trim());
 }
  const clean=[" injustice", " SuperMan", "Batman ", " flash "];
 console.log(cleanname(clean));


 ////////2//////////////
 function convert(miles){
   let kilometersArray=miles.map(Element=>Element*1.60934);
   const tokm= kilometersArray.reduce((sum,km) => sum + km,0);
   return tokm ;

 }
    console.log(convert( [10, 20, 30, 40]));
    

  ////////3//////////////
  function squareSumAndAverage(array) {
    const sum = array.map(num => num ** 2).reduce((total, square) => total + square, 0);
    const average = sum / array.length;
  
    return  average ;   
  }

   console.log(squareSumAndAverage([1, 2, 3, 4, 5]));

   ////////4//////////////
   function plus(array){
    const sum=array.map(num=>num+4);
    return sum;
   }
   console.log(plus( [1, 2, 3, 4, 5]));

   ////////5//////////////
   function sumEvenDoubledNumbers(numbers) {
    let even = numbers.filter(num => num % 2 === 0);
    let double = even.map(num => num * 2);

    let sum = double.reduce((total, num) => total + num, 0);

    return sum;
  }
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(sumEvenDoubledNumbers(numbers));

 ////////6////////////// 
 function upperCase(words) {
    return words.map(word => word.toUpperCase());
  }
  console.log(upperCase(['apple', 'banana', 'cherry', 'date']));

  ////////7////////////// 
  function transform(heros) {
    return heros.map((hero, index) => ({
      hero: hero.name,  
      power: hero.power,  
      id: index  
    }));
  }
  console.log(transform( [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]));


    ////////8////////////// 
    function filterWord(inputWords) {
        
    return inputWords.filter(word => word.length >= 7);
      }
      console.log(filterWord( ["spray", "limit", "elite", "exuberant", "destruction", "present"]));



      ////////9//////////////
      const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const odd = numbers.filter(num => num % 2 !== 0);
      console.log("Odd numbers:", odd);
      const divisible = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
      console.log("Numbers divisible by 2 or 5:", divisible);
      const Squared = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
     console.log("Numbers divisible by 3, then squared:", Squared);
     const sum = numbers.filter(num => num % 5 === 0).map(num => num ** 2).reduce((total, num) => total + num, 0);
     console.log("Sum of squares of numbers divisible by 5:", sum);

     ////////10//////////////
     let nums = [11, 22, 33, 46, 75, 86, 97, 98];
     let squaredEvenNums = nums.filter(num => num % 2 === 0).map(num => num ** 2);
     console.log(`squaredEvenNums: ${squaredEvenNums}`);
     let sumOfNums = nums.reduce((total, num) => total + num, 0);
     console.log(`sumOfNums: ${sumOfNums}`);

     ////////11//////////////
     let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
     let filteredCountries = countries.filter(country => !country.startsWith('U') && !country.startsWith('R'));
    console.log( filteredCountries);
    let upperCaseCountries = filteredCountries.map(country => country.toUpperCase());
    console.log( upperCaseCountries);
    let totalCharacters = upperCaseCountries.reduce((total, country) => total + country.length, 0);
    console.log( totalCharacters);

    

    ////////12//////////////
    const numbers1 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
    let numbersGreaterThan50= numbers1.filter(num =>num>50);
    console.log(numbersGreaterThan50);




      
    

