console.log("JavaScript loaded :) ")
// 0 BASIC FUNCTIONS 

function name_of_function() {
    
}

function counter() {
    for(var num = 0; num <= 5; num++){
        console.log(num);
    }
}
counter()

function counter(startNum) {
    for (var num = startNum; num >=0; num--) {
        console.log(num)
    }
}
// counter(3)
// counter(6)

function createArray(num) {
    var newArray = [];
    for (var i = 0; i <=num; i++){
        newArray.push(i);
    }
    return newArray
}
var y = createArray(5)
// console.log(y)

// 1 onclick=""
// element.innerText

function custom() {
    console.log("this message is coming from script.js")
}

function example(element) {
    console.log("element clicked",element);
}


let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function turnOff(element) {
    console.log(typeof element.id, element.id)
    if (element.id=="button1") {
        counter=counter1
        counter1++
    }
    else if (element.id=="button2") {
        counter=counter2
        counter2++
    }else{
        counter=counter3
        counter3++
    }

    if (counter%2==0) {
    console.log('Turning off', counter)
    element.innerText = "Off";
    } else {
    console.log('Turning on', counter)
    element.innerText = "On";
    }
}

function turnOff2(element) {
    console.log("turnOff2",element.innerText)
    if (element.innerText=="On"){
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }
}


// 2 onclick="" + img
// element.remove()

function hide(element){
    element.remove();
}

// 3 onmouseover=""   onmouseleave=""
// element.classList.add("shadow")
// element.classList.remove("shadow")
// element.style.backgroundColor=""
// play() / element.play()
// pause() / element.pause()

function addShadow(element) {
    element.classList.add("shadow");
}
function removeShadow(element) {
    element.classList.remove("shadow");
}
function over(element) {
    // alert("mouseover");
    element.style.backgroundColor="lime"
}
function out(element) {
    // alert("mouseout");
    element.style.backgroundColor="silver"
}

// 4 document.querySelector("xxxxx")        CHANGE HTML
// xxxxx.innerText = yyyyy
// xxxxx.src = 
// xxxxx.alt = 
let $4count = 1;
let $4counter = document.querySelector("#counter");
function add1() {
    $4count ++
    $4counter.innerText = "The count is " + $4count
}
function subtract1() {
    $4count --
    $4counter.innerText = "The count is " + $4count
}

let ninja_plane = document.querySelector("#ninja_plane")
function switchImg() {
    if (ninja_plane.alt == "ninja"){
        ninja_plane.src = "images/player.png"  
        ninja_plane.alt = "plane"  
    } else {
        ninja_plane.src = "images/ninja.png"  
        ninja_plane.alt = "ninja"  
    }
}

// 5 CHANGE CSS
// element.style.color = ""
// element.style.backgroundColor=""
// element.style.classList.remove("")
// element.style.classList.add("")
// element.style.classList.value.includes("")

function changeColor1(element){
    console.log(element.style.color)
    console.log(element.style.backgroundColor)
    if (element.style.color == "white") {
        console.log("yes")
        element.style.color = "green"
        element.style.backgroundColor = "yellow"
        element.innerText = "switch to red";
    } else {
        console.log("no")
        element.style.color = "white"
        element.style.backgroundColor = "red"
        element.innerText = "switch to yellow";
    }
}

function changeColor2(element) {
    // if (element.classList[0] == "red") {
    console.log("\n\tA\n")
    console.log(element)
    // console.log(element.classList.includes("red"))
    console.log("\n\tB\n")
    console.log(element.classList.contains("red"))
    console.log("\n\tC\n")
    console.log(element.classList.value)
    console.log("\n\tD\n")

    if (element.classList.value.includes("red")) {
        element.classList.remove("red");
        element.classList.add("yellow");
        element.innerText = "switch to red";
    } else {
        element.classList.remove("yellow");
        element.classList.add("red");
        element.innerText = "switch to yellow";
    }
}
// 6 SELECTING AMONG MULTIPLE IDENTICAL ELEMENTS WITH JavaScript

const likes = [0,0,0];
const like_statements = [
    document.querySelector("#post_1"),
    document.querySelector("#post_2"),
    document.querySelector("#post_3"),
];

function like(id) {
    likes[id] ++
    if (likes[id] == "1") {
        // like_statements[id].innerText = `${likes[id]} like`;
        like_statements[id].innerText = likes[id] + " like";
    } else {
        // like_statements[id].innerText = `${likes[id]} likes`;
        like_statements[id].innerText = likes[id] + " likes";
    }
}

// VERSION 2

function like2(id) {
    // let likes = Number(document.getElementById(id).innerText.match(/\d+/g)[0])
    let likes = parseFloat(document.getElementById(id).innerText)
    likes ++
    if (likes == "1") {
        document.getElementById(id).innerText = likes + " like";
    } else {
        document.getElementById(id).innerText = likes + " likes";
    }
}

// 7 setTimeout(function_to_be_run,delay_in_miliseconds)
// onchange="xxxx()"
// oninput="xxxxx()"
// onkeydown="xxxxx()"

function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");

// VERSION 1

const nameSpan=document.getElementById('name');

function changeName(){
    const oldname=nameSpan.innerText;
    nameSpan.innerHTML = `<input type="text" name="name" value="${oldname}" oninput="setName(this)">`;
}

function setName(element){
    const newName = element.value;
    document.onkeydown=function(event){
        if (event.key == "Enter"){
            nameSpan.innerHTML = element.value;
        }
    }

}
// VERSION 2


function changeName2(id){
    const nameSpan2=document.getElementById(id);
    const oldName=nameSpan2.innerText;
    nameSpan2.innerHTML = `<input type="text" id="new_name" value="${oldName}" onkeydown="setName2(event,'${id}')">`;
}

function setName2(event,id){
    if (event.key == "Enter"){
        const nameSpan2=document.getElementById(id);    
        element = document.getElementById("new_name");
        const newName = element.value;
        nameSpan2.innerHTML = newName;
    }
}

// 8 onchange(this)

let foodToOrder = "pizza";

function pickFood(element){
    foodToOrder = element.value;
}
function order(){
    alert("Ordering "+foodToOrder)
}

// 9 document.querySelectorall("...")
// .style.color = xxxx

var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}

// 10 API = Application Programming Interface
// JSON = JavaScript Object Notation
// await fetch, await response.json()
// AJAX =  Asynchronous JavaScript And XML
// Any time we use the await keyword in a function in JavaScript 
// we need to apply the async keyword to that function.

async function getCoderData() {
    const response = await fetch("https://api.github.com/users/dev-marisa");
    const coderData = await response.json();
    console.log(coderData.avatar_url);
    const avatar = document.querySelector("button[onclick='getCoderData()']");
    avatar.outerHTML = `<img src="${coderData.avatar_url}" alt="marisa avatar" height="100vw;">`

}
    
// getCoderData();

// 11 MEDIA QUERIES

// PHONE	Width less than or equal to 480px
// TABLET	Width between 481px and 1023px
// DESKTOP	Width greater than or equal to 1024px

// The REM unit is a multiplier of the default font size of the user's browser. 
// The EM unit is a multiplier of the element's parent.

// 12 TRANSITION

function scale(element, value) {
    element.style.transform = "scale(" + value + ")";

    
}

// 13 jQUERY / EVENT LISTENERS      

// JavaScript:

var btns = document.querySelectorAll(".javascript_event_listener");
    
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
        alert("Button clicked!");
    });
}

// jQuery:

$(".jquery_event_listener").click(function() {
    alert("Button clicked");
});

// some jQuery effects:  
// .hover	    A method that allows us to conveniently define what should happen on mouse enter and on mouse leave
// .change	    A method to listen the changes on form inputs and selects
// .submit

// .show        Methods to hide or show an element.
// .hide	    
// .toggle      combines the two into one method.
// .fadeOut
// .fadeIn
// .fadeToggle	Methods that animate hiding and showing with a fade effect
// .slideUp
// .slideDown
// .slideToggle

// .attr	Method to get or set an element's attribute
// .text	Method to get or set the text inside an element
// .html	Method to alter the HTML inside of an element
// .append

// .prepend	            Methods to add new elements at the end of beginning of an element
// .css	                Method to alter an element's CSS properties
// .addClass

// .removeClass        Methods to add and remove CSS classes on an element.


// 13 jQUERY / EVENT LISTENERS 

async function gitUser1() {
    var response = await fetch("https://api.github.com/users/adion81");
    var coderData = await response.json()

    // console.log (coderData)

    // for (e in coderData){
    //     console.log (e)
    // }

    // console.log (coderData.avatar_url)
    // console.log (coderData.name)

    const insert_name = document.getElementById("insert_name")
    insert_name.innerText = `${coderData.name} has ${coderData.followers} followers`
    const insert_avatar = document.getElementById("insert_avatar")
    insert_avatar.innerHTML = `<img src="${coderData.avatar_url}" alt="">`
    // insert_avatar.outerHTML = `<img src="${coderData.avatar_url}" alt="">`
    return coderData

}

async function gitUser2() {
    var coderData = await gitUser1();
    console.log (coderData);
    console.log ("E",coderData.avatar_url);
    console.log ();
    console.log (typeof(coderData));
    console.log (Array.isArray(coderData));
    console.log(Object.keys(coderData));  
    for (b in Object.keys(coderData)){
        console.log(Object.keys(coderData)[b]);
    }
    for (e in coderData){
        console.log(e);
    }
}

function gitUser3() {
    var result = fetch("https://api.github.com/users/adion81")
    .then(response => response.json())
    .then(coderData => {
                    // document.getElementById("insert_name").innerText=`${result.name} has ${result.followers} followers`;
                    const insert_name = document.getElementById("insert_name")
                    insert_name.innerText = `${coderData.name} has ${coderData.followers} followers`
                    const insert_avatar = document.getElementById("insert_avatar")
                    insert_avatar.innerHTML = `<img src="${coderData.avatar_url}" alt="">`                                    
                    }
            )
    .catch(err => console.log("D",err))

}

// WITH FORM AND INPUT INSTEAD OF JUST BUTTONS

async function gitUser4(){   
    const get_followers = document.getElementById("get_followers");
    const get_avatar = document.getElementById("get_avatar");
    var response = await fetch("https://api.github.com/users/adion81");
    var coderData = await response.json()
    if (get_followers.checked == true){
        document.getElementById("insert_name").innerText = `${coderData.name} has ${coderData.followers} followers`
        }
    if (get_avatar.checked == true){
        document.getElementById("insert_avatar").innerHTML = `<img src="${coderData.avatar_url} alt="">`                                    
        }
}