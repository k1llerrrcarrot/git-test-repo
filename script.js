const menuWrapper = document.getElementById("menu-wrapper");
const colorMenu = document.getElementById("color-menu");
const colors = document.getElementsByTagName("li");

const currentColor = document.getElementById("current-color")
const bodyClasses = document.body.classList;

const white = document.getElementById("white");
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const green = document.getElementById("green");

const hideMenu = function() {
    colorMenu.classList.remove("visible");
    menuWrapper.classList.remove("visible");
}

const showMenu = function() {
    colorMenu.classList.add("visible");
    menuWrapper.classList.add("visible");
}

const menuMouseOver = function() {
    
    menuWrapper.addEventListener('mouseenter', function() {        
        showMenu();
    })

    menuWrapper.addEventListener('mouseleave', function() {        
        hideMenu();
    })
}

const applyClasses = function(color) {
    while (bodyClasses.length > 0) {
        bodyClasses.remove(bodyClasses.item(0));
    }

    currentColor.innerHTML = color;
    document.body.classList.add(color);
    hideMenu();
}

const colorClick = function() {

    white.addEventListener('click', function (){
        applyClasses("white");
    })

    red.addEventListener('click', function (){
        applyClasses("red");   
    })

    orange.addEventListener('click', function (){
        applyClasses("orange");    
    })

    purple.addEventListener('click', function (){
        applyClasses("purple");    
    })

    green.addEventListener('click', function (){
        applyClasses("green");    
    })

}

const colorButtons = function() {
    document.body.addEventListener('keydown', function(e) {1
        let pressedKey = e.key;

        if (pressedKey === "1") {
            applyClasses("white");
            white.children[0].checked = true;
        }

        if (pressedKey === "2") {
            applyClasses("red");
            red.children[0].checked = true;
        }

        if (pressedKey === "3") {
            applyClasses("orange");
            orange.children[0].checked = true;
        }

        if (pressedKey === "4") {
            applyClasses("purple");
            purple.children[0].checked = true;
        }

        if (pressedKey === "5") {
            applyClasses("green");
            green.children[0].checked = true;
        }
    })
}

menuMouseOver();
colorClick();
colorButtons();