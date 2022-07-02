
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
    // console.log("The food is ",element.value);
    foodToOrder = element.value;
}
function order(){
    alert("Ordering "+foodToOrder)
}