console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
var me = {
  firstName: "Moath",
  lastName: "Abady",
  age: 26,
  dob: "08-04-2019",
  favoriteFood: ["mansaf", "maqlooba","zarb"],
  favoriteMovie: ["warrior", "deadpool", "batman", "green miles","me before you"]
}





var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

var x = persons.length;
function firstName (obj) {
  shaker = obj[0]['name']['first']
  for (var i = 1; i < x; i++) {
    var shaker = shaker + ", "+ obj[i]['name']['first'];
  }
  return shaker

}
  



/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/

function averageAge (obj) {
  moath = 0;
  for (var i = 0; i < x; i++) {
    var moath = moath + obj[i]['age'];
  }
  return moath / x;
}


/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
  function olderPerson(obj){
  var max= persons[0]["age"]
  for (var i = 1; i<x; i++){
   var old = persons[i]["age"]
    if (old > max ){
     max = old;
     s = obj[i]["name"]["first"]+" "+obj[i]["name"]["last"] ;
  }
}
return s;
}



/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

function olderPerson1(obj){
  var max= obj[0]["name"]["first"]+" "+obj[0]["name"]["last"]
  for (var i = 1; i<x; i++){
     s = obj[i]["name"]["first"]+" "+obj[i]["name"]["last"] ;
     if (s.length > max.length)
     max = s;
       
    }
  return max;

}


/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(obj){
  var small = obj.toLowerCase();
  var word = small.split(' ');
  var khalel = {};

  for (var i = 0; i < word.length; i++) {
    var counter = 0;
    for (var j = 0; j < word.length; j++) { 
    if (word[j] === word[i]) {
      counter++;
    }
    }
    khalel[word[i]]=counter;
  }
  return khalel;
}
  
  



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar (obj) {
  var word = obj.split('');
  var khalel2 = {};

  for (var i = 0; i < word.length; i++) {
    var counter = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        counter++;
      }
    }
    khalel2[word[i]] = counter;
  }
  return khalel2;
}


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3, bbb:6}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject (obj,arr){
  var objNew={}
  for (var i = 0; i < arr.length; i++){
    for (var key in obj){
      if (arr[i]=== key){

      objNew[arr[i]]=obj[key];

      }
    }
  }
  return objNew;
  }


/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/

function objectToArray(obj) {
  var arr = [];
  
  for (var key in obj) {
    
    arr.push(key);
    arr.push(obj[key])
  }
  return arr;
}
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function arrayToObject (arr) {
  
  var obj = {};
  
  for (var i = 0; i < arr.length; i+=2) {

    obj[arr[i]] = arr[i+1]

  }
  return obj;
}



/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber (obj) {
  
  var newObj = {}
  
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      
      newObj[key] = obj[key]
    }
  }
  return newObj;
}



/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function onlyString (obj) {
  
  var newObj = {}
  
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      
      newObj[key] = obj[key]
    }
  }
  return newObj;
}



/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/

function onlyArray (obj) {

    var newObj = {}
    
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        
        newObj[key] = obj[key]
      }
    }
    return newObj;
  }




/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/

// another way to solve these question
/*
function keysArray (obj) {

  var arr = [];

  for (var key in obj) {

    arr.push(key)

  }
  return arr;
}
*/
function keysArray (obj) {
  return Object.keys(obj);
}


/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/

function valuesArray (obj) {
  return Object.values(obj);
}


/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

var obj = {a:1, b:3, c:4};

obj['a'] = 4;
obj['c'] = 66;
delete obj['b'];


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/

function objectLength (obj) {

  return Object.keys(obj).length

}


/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function evenValue (obj) {

  var newObj = {}

  for (var key in obj) {
    if (obj[key] %2 === 0) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}



/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/

function longestKey (obj) {

  var newValue = '';

  for (var key in obj) {
    if (newValue.length > key.length) {
      newValue = newValue;
    }else {
      newValue = key;
    }
  }
  return obj[newValue];
}


function longestKey (obj) {

  var maxObject=-2000000;
  var b ;

  for (var key in obj) {
    if (key.length > maxObject) {
     maxObject = key.length;
     b=obj[key];
  }}
  return b;
}
console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}));