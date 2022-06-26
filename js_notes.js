
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

// 1 onclick="" + button
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

// 2 onclick="" + img
// element.remove()

function hide(element){
    element.remove();
}

// 3 onmouseover=""   onmouseleave=""
// element.classList.add("shadow")
// element.classList.remove("shadow")

function addShadow(element) {
    element.classList.add("shadow");
}
function removeShadow(element) {
    element.classList.remove("shadow");
}

// 4 