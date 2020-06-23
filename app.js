// ASSIGNMENT # 6 JAVASCRIPT CHAPTER 21 TO 38

// CHAPTER # 21-25 and Task # 1

// var firstName = prompt("Please enter your First Name")
// var lastName = prompt("Please enter your Last Name")
// var fullName = firstName +" "+ lastName
// alert("Welcome " + fullName)

// CHAPTER # 21-25 and Task # 2

// var mobileModel = prompt("Please enter your Favourite Mobile Phone Model here")
// var strLength = mobileModel.length

// document.write("My favourite phone is: "+mobileModel+"<br>")
// document.write("Length of string: "+strLength+"<br>")


// CHAPTER # 21-25 and Task # 3

// var str = "Pakistani"
// var strIndex = str.indexOf("n")

// document.write("String: "+str+"<br>")
// document.write("Index of 'n': "+strIndex)

// CHAPTER # 21-25 and Task # 4

// var str = "Hello World"
// var strIndex = str.lastIndexOf("l")

// document.write("String: "+str+"<br>")
// document.write("Last index of 'l': "+strIndex)

// CHAPTER # 21-25 and Task # 5

// var str = "Pakistani"
// var strChar = str.charAt(3)

// document.write("String: "+str+"<br>")
// document.write("Character at index 3: "+ strChar)

// CHAPTER # 21-25 and Task # 6

// var firstName = prompt("Please enter your First Name")
// var lastName = prompt("Please enter your Last Name")
// var fullName = 
// alert("Welcome " + fullName)

// CHAPTER # 21-25 and Task # 7

// var text = "Hyderabad"

// var text1 = text.replace("Hyder","Islam")
//       document.write("Before replacement: "+text+"<br>")
//       document.write("After replacement: "+text1)

//alternative solution

// var text = "Hyderabad"
// document.write("City: "+text+"<br>")
// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 5) === "Hyder") {
//      text = text.slice(0, i) + "Islam" + text.slice(i + 5);
//      }
//     }
//      document.write("After replacement: "+text)

//alternative solution
// var text = "Hyderabad"
// var firstChar = text.indexOf("Hyder");
//  document.write("City: "+text+"<br>")

// if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "Islam" + text.slice(firstChar + 5);
//  }
//       document.write("After replacement: "+text)



// CHAPTER # 21-25 and Task # 8


// var text = "Ali and Sami are best friends. They play cricket and football together"

// var text1 = text.replace(/and/g,"&")
//       document.write("Before replacement: "+text+"<br>")
//       document.write("After replacement: "+text1)

// alternative solution
// var text = "Ali and Sami are best friends. They play cricket and football together"
// document.write("Before replacement "+text+"<br>")
// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 3) === "and") {
//      text = text.slice(0, i) + "&" + text.slice(i + 3);
     
//      }
//     }
//      document.write("After replacement: "+text)

// CHAPTER # 21-25 and Task # 9

// var str = "472"
// var convert = Number(str)

// document.write("Value "+ str+"<br>")
// document.write("Type: "+ typeof(str)+"<br>")
// document.write("Value "+ convert+"<br>")
// document.write("Type: "+ typeof(convert))

// alternative solution
// var str = "472"
// var convert = parseInt(str)

// document.write("Value "+ str+"<br>")
// document.write("Type: "+ typeof(str)+"<br>")
// document.write("Value "+ convert+"<br>")
// document.write("Type: "+ typeof(convert))

// alternative solution
// var str = "472"
// var convert = +(str)

// document.write("Value "+ str+"<br>")
// document.write("Type: "+ typeof(str)+"<br>")
// document.write("Value "+ convert+"<br>")
// document.write("Type: "+ typeof(convert))


// CHAPTER # 21-25 and Task # 10

// var text = prompt("Please enter something ")

// document.write("User input :"+ text + "<br>" )
// document.write("Upper Case :"+ text.toUpperCase() + "<br>" )

// CHAPTER # 21-25 and Task # 11

// var text = prompt("Please enter something ")
// var firstChar = text.slice(0,1)
// firstChar = firstChar.toUpperCase()
// var otherChar = text.slice(1)
// var fullChar = firstChar + otherChar

// document.write("User input :"+ text + "<br>" )
// document.write("Title Case :"+ fullChar + "<br>" )


// CHAPTER # 21-25 and Task # 12

// var num = 35.36
// var str = num.toString()

// document.write("Number :"+ num + "<br>" )
// document.write("Result :"+ str.slice(0,2) + str.slice(3) )


// CHAPTER # 21-25 and Task # 13
// var str = prompt("Please enter the user name")

// var num =0
// var char = str.split('')
// for (var i = 0; i < char.length; i++) {
//     if (char[i] === "!" || char[i] === "@" || char[i] === "," || char[i] === "."  ) {
//     alert("entry of '!',  '@'  ','  '.' are not allowed")
//     break;
//      }
//      }


// CHAPTER # 21-25 and Task # 14

// var  items = ["cake", "apple pie", "cookie", "chips" , "patties" ]

// var input = prompt("Welcome to ABC Bakery, what do you want to order sir/madam?")

// var search = input.toLowerCase()

// if(items.indexOf(search) !== -1 ) {
//     alert("Yes " + search + " is available at index " + items.indexOf(search) +" in our bakery")
// }
// else {
// alert("We are sorry. " + search +  " is not available in our bakery")
// }

// CHAPTER # 21-25 and Task # 15

// var str = prompt("Please enter the password")

// var num =0
// var char = str.split('')
// var firstChar = str.slice(0,1)
// if (isNaN(firstChar) ){
// }
// else {
//     alert("First character of a password should not be a number")
// }
// if (str.length < 6){
//     alert("Password length should be atleast 6 characters")
// }

// if (str.length < 6){
//     alert("Password length should be atleast 6 characters")
// }



// CHAPTER # 21-25 and Task # 16

//  var str = "University of Karachi"
//  for (var i = 0; i <= str.length; i++) {
//    document.write (str.charAt(i)+"<br>") 
// }



// CHAPTER # 21-25 and Task # 17


// var text = prompt("Please enter the input")

// var lastChar = text.charAt(text.length-1)

// document.write("User Input: "+text+"<br>")

// document.write("Last Charater of Input: "+lastChar+"<br>")

// CHAPTER # 21-25 and Task # 18

// var str = "The quick brown fox jumps over the lazy dog"
// var num =0
// var char = str.split(' ')
// for (var i = 0; i < char.length; i++) {
//     if (char[i] === "the" || char[i] === "The" ) {
//     num++
//      }
//      }
//      document.write(str+"<br>"+"There are "+num+" occurence(s) of the word 'the'");

// CHAPTER # 26-30 and Task # 1


// var num = prompt("Please enter the positive number")
// var round = Math.round (num)
// var ceil = Math.ceil (num)
// var floor = Math.floor (num)


// document.write("number: "+num+"<br>")
// document.write("round off value: "+round+"<br>")
// document.write("floor  value: "+ceil+"<br>")
// document.write("ceil  value: "+floor+"<br>")


// CHAPTER # 26-30 and Task # 2


// var num = prompt("Please enter the negative floating number")
// var round = Math.round (num)
// var ceil = Math.ceil (num)
// var floor = Math.floor (num)


// document.write("number: "+num+"<br>")
// document.write("round off value: "+round+"<br>")
// document.write("floor  value: "+ceil+"<br>")
// document.write("ceil  value: "+floor+"<br>")


// CHAPTER # 26-30 and Task # 3

// var num = prompt("Please enter the negative floating number")
// var absolute = Math.abs (num)

// document.write("The absolute value of "+num+" is "+absolute+"<br>")


// CHAPTER # 26-30 and Task # 4

// var num = Math.random() * 6 
// var num1 = Math.random() * 6 

// var num = Math.ceil(num)
// var num1 = Math.ceil(num1)

// document.write("Random dice value"+num+"<br>")
// document.write("Random dice value"+num1+"<br>")

// CHAPTER # 26-30 and Task # 5

// var num = Math.random() * 2  

// var num = Math.ceil(num)
// if(num === 1){
// document.write(num+"<br>"+"Random coin value: Tails"+"<br>")
// }
// else {
//     document.write(num+"<br>"+"Random coin value: Heads"+"<br>")

// }


// CHAPTER # 26-30 and Task # 6

// var num = Math.random() * 100 
// var num = Math.ceil(num)

// document.write("Random Number between 1 and 100: "+num+"<br>")

// CHAPTER # 26-30 and Task # 7

// var num1 = prompt("Please enter your weight in Kgs")

// num1 = Number(num1)
// var num2 = num1.toFixed(1);

//  document.write ("The weight of the user is "+num2+" kilograms ")

// CHAPTER # 26-30 and Task # 8

// var num = Math.random() * 10 
// var num = Math.ceil(num)

// var input = +prompt("Enter the number between 1 and 10")

// if ( input === num){
//     alert("Congratulations on guessing the correct nummber")
// }
// else{
//     alert("Try again")
// }
// document.write("The scret number is " +num)

// CHAPTER # 31-34 and Task # 1

// var date = new Date()

// document.write(date)


// CHAPTER # 31-34 and Task # 2


// var monthNames = ["January", "Februay", "March", "April", "May", "June", "July","August","September","October","November","December"  ];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[theMonth];


// document.write("Current Month: " + nameOfMonth)


// CHAPTER # 31-34 and Task # 3

// var date = new Date()

// var str = date.toString()

// document.write("Today is "+str.slice(0,3))


// CHAPTER # 31-34 and Task # 4

// var date = new Date()

// var str = date.getDay()

// if(str === 6 || str === 0)
// {
// document.write("Its a Fun day")
// }

// CHAPTER # 31-34 and Task # 5

// var date = new Date()

// var str = date.getDate()

// if(str <16)
// {
// document.write("First fifteen days of the month")
// }
// else {document.write("last days of the month")
// }


// CHAPTER # 31-34 and Task # 6

// var now = new Date()

// var mili = now.getTime()

// var mins = mili / 1000 / 60 
// document.write("Current Date: "+now+"<br>")
// document.write("Elapsed miliseconds since 1, January 1970: " + mili+"<br>")
// document.write("Elapsed minutes since 1, January 1970: "+mins)


// CHAPTER # 31-34 and Task # 7

// var date = new Date()
//  var str = date.getHours()

// if (str < 12) {
//     document.write("AM")
// }
// else {
//     document.write("PM")
// }


// // CHAPTER # 31-34 and Task # 8

// var d = new Date()

// d.setFullYear(2020)
// d.setMonth(11)
// d.setDate(31)

// document.write("Later Date: "+d)

// // CHAPTER # 31-34 and Task # 9

// var r = new Date()

// r.setFullYear(2015)
// r.setMonth(5)
// r.setDate(18)

// var t = new Date()

// var rmili = r.getTime()

// var tmili = t.getTime()

// var diff = tmili - rmili

// var diffDays = diff / (1000*60*60*24)


// document.write(diffDays+" days have passed since 1st Ramzan, 2015"+"<br>")


// // CHAPTER # 31-34 and Task # 10

// var r = new Date()

// r.setFullYear(2015)
// r.setMonth(11)
// r.setDate(5)
// r.setHours(22)
// r.setMinutes(50)
// r.setSeconds(16)


// var l = new Date()

// l.setFullYear(2015)
// l.setMonth(0)
// l.setDate(1)
// l.setHours(0)
// l.setMinutes(0)
// l.setSeconds(0)


// var rmili = r.getTime()

// var lmili = l.getTime()

// var diff = rmili - lmili

// var diffDays = Math.ceil(diff / (1000*60))

// document.write("On reference Date "+l+","+"<br>"+diffDays+" seconds have passed since beginning of 2015"+"<br>")

// // CHAPTER # 31-34 and Task # 11
//====================================

// var r = new Date()
// var aHour = 60*60*1000;
// var r1 = new Date(Date.now()-aHour)



// document.write("current date:  "+r+"<br>"+"1 hour ago, it was "+r1+"<br>")


// // CHAPTER # 31-34 and Task # 12

// var r = new Date()
// var aCentury = 100*365.25*24*60*60*1000;
// var r1 = new Date(Date.now()-aCentury)



// document.write("current date:  "+r+"<br>"+"100 years back, it was "+r1+"<br>")

// // CHAPTER # 31-34 and Task # 13

// var dob = new Date(prompt("Enter your date of birth here,", "Jan 1 1970"))
// var today = new Date()
// var dobmili = dob.getTime()
// var todaymili = today.getTime()
// var diff = todaymili - dobmili
// var diffYear = diff /(1000*60*60*24*30*12)
// var accuage = Math.floor(diffYear)
// alert("Your Age is "+accuage)

// // CHAPTER # 31-34 and Task # 14

// document.write("<h1>K-Electric Bill</h1>"+"<BR>"+"<br>"+"<br>")

// var customerName = "ABC Customer"
// var numOfUnits = 410
// var charges = 16
// var  surcharge  = +350
// var normalBill = numOfUnits * charges
// var grossBill = normalBill+surcharge
// charges.toFixed(2)
// normalBill.toFixed(2)
// grossBill.toFixed(2)

// document.write("Customer Name: "+" "+"<br>")
// document.write("Month: "+""+"<br>")
// document.write("No. of Units: "+" "+"<br>"+"<br>")
// document.write("Net amount payable (within Due Date): "+(numOfUnits * charges)+"<br>")
// document.write("Late payment surcharge: "+ surcharge+"<br>")
// document.write("Gross amount payable (after Due Date): "+grossBill+"<br>")

// // CHAPTER # 35-38 and Task # 1

// function time (){
// var     times = new Date()
// document.write (times)

// }

// time()


// // CHAPTER # 35-38 and Task # 2

// function greeting (){
// var     firstName = prompt("Enter enter the First Name here")
// var     lastName = prompt("Enter enter the Last Name here")
// var fullName = firstName +" "+lastName

// alert("Welcome to our application, "+fullName)
// }

// greeting()



// // CHAPTER # 35-38 and Task # 3

// function add (){
// var     num1 = +prompt("Enter enter the First Number here")
// var     num2 = +prompt("Enter enter the Second Number here")
// var num3 = num1 + num2

// alert("The sum of First Number and Second Number is: "+num3)
// }

// add()


// // CHAPTER # 35-38 and Task # 4

// var linebreak = "<br>"
// var heading = "<h1>CALCULATOR</h1><br><br>"

//  document.write(heading)

// function calculator (){


 
// var firstNo = prompt("Please Enter the First No.here")
// var secondNo = prompt("Please Enter the Second No. here")
// var operator= prompt("Please Enter the operator for required math operation here")


 
//  if(operator === "+"){
// var result = (+firstNo) + (+secondNo) 
//     document.write(firstNo+" "+operator+" "+secondNo+" = "+ result)
// }
// else if (operator === "-"){
//     var result = (firstNo) - (secondNo) 
//         document.write(firstNo+" "+operator+" "+secondNo+" = "+ result)
//     }
// else if (operator === "*"){
//     var result = (firstNo) * (secondNo) 
//         document.write(firstNo+" "+operator+" "+secondNo+" = "+ result)
//     }
// else if (operator === "/"){
//     var result = (firstNo) / (secondNo) 
//         document.write(firstNo+" "+operator+" "+secondNo+" = "+ result)
//     }
// else if (operator === "%"){
//     var result = (firstNo) % (secondNo) 
//         document.write(firstNo+" "+operator+" "+secondNo+" = "+ result)
//     }
// }

// calculator()

// // // CHAPTER # 35-38 and Task # 5

// var heading = "<h1>Squaring Application</h1><br><br>"
//  document.write(heading)


// function square(a){

// var b = (a) * (a)

// document.write("The square of number "+a+ " is "+b)

// }

// var  input = +prompt("Please enter the number to square it")

// square(input)


// // CHAPTER # 35-38 and Task # 6
//======================================
// var heading = "<h1>Factoring Application</h1><br><br>"
//  document.write(heading)


// function factor1(a){


// if (a === 0 || a === 1){
//     return 1;
// }
// else {
//     for (var i = a - 1; i >= 1; i--) {
//         // We store the value of num at each iteration
//         a = a * i; // or num *= i;
//         /* 
//                         num      var i = num - 1       num *= i         i--       i >= 1?
//         1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
//         2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
//         3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
//         4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
//         5th iteration: 120               0                120
//         End of the FOR loop 
//         */
//       }
//       return a; //120
//       //document.write("The factor of number "+a+ " is"+a)

// }




// var  input = +prompt("Please enter the number to square it")
// var result = factor1()

// alert(result)

// CHAPTER # 35-38 and Task # 7


// function counting() {

//     var     num1 = +prompt("Enter enter the First Number here")
//     var     num2 = +prompt("Enter enter the Second Number here")
//     var num3 = num2  - num1
    

// for (var i = 1; i <= num3+1; i++) {
// document.write(num1+"<br>")
// num1++    

// }
    
// }

// counting()

// alternative solution
// function counting2(h,w) {
//     var num3 = w - h
// for (var i = 1; i <= num3+1; i++) {
// document.write(h+"<br>")
// h++    
// }
// }

// var w = +prompt("Enter width of Rectangle here")
// var h = +prompt("Enter height of Rectangle here")

// counting2(w,h)


// CHAPTER # 35-38 and Task # 8

//=================================

// CHAPTER # 35-38 and Task # 9 (i)

// function area(h,w) {

//     var num3 = h * w
    

// document.write(num3+"<br>")
    
// }

// area(50,60)


// CHAPTER # 35-38 and Task # 9 (ii)

// function area(h,w) {

//     var num3 = h * w
    
// document.write(num3)
    
// }

// var width = +prompt("Enter width of Rectangle here")
// var height = +prompt("Enter height of Rectangle here")

// area(width,height)

// CHAPTER # 35-38 and Task # 10

// function palindrom(str){
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
// }

// var input = prompt("Please enter the word here")
// var abc = palindrom(input)

// if(abc === true){
// alert(input+" is a Palindrom word")
// }
// else {
//     alert(input+" is not a Palindrom word")

// }

// CHAPTER # 35-38 and Task # 11

// function titleCase(str){

// var firstChar = str.slice(0,1)
// firstChar = firstChar.toUpperCase()
// var otherChar = str.slice(1)
// var fullChar = firstChar + otherChar

// document.write("EXAMPLE STRING :"+ str + "<br>" )
// document.write("EXPECTED  OUTPUT :"+ fullChar + "<br>" )
// }

// str = prompt("Please enter something ")
// titleCase(str)

// CHAPTER # 35-38 and Task # 12
//===============================
// function titleCase(str){

// var check = str



// document.write("EXAMPLE STRING :"+ str + "<br>" )
// document.write("EXPECTED  OUTPUT :"+ fullChar + "<br>" )
// }

// str = prompt("Please enter something ")
// titleCase(str)

// CHAPTER # 35-38 and Task # 13

// function check(str){

// var numChars = str.length;
// var num = 0
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 1) === "o") {
// num  = num+1
// }
// }
// alert("No. of o in string: "+num);

// }

// var str = prompt("Enter some text");
// check(str)

// CHAPTER # 35-38 and Task # 14

