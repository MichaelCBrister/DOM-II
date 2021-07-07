// Your code goes here
/* 1. Mouse Over */
const logoHeading = document.querySelector(".logo-heading");

logoHeading.onmouseover = function(event) {   
event.target.style.fontStyle = "italic";
};
logoHeading.onmouseout = function(event) {
    event.target.style.fontStyle = "normal";
}

/* 2. Keydown */
document.addEventListener("keydown", logKey);

function logKey() {
    window.alert("Hey there!");
};

/* 3. Wheel */
const zoomImg = document.querySelector("img");

zoomImg.addEventListener("wheel", event => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    event.target.style.width = (zoomImg.width + (delta * 15)) + "px";
    event.target.style.height = Math.min(((zoomImg.height + (delta * 15)) + "px"), event.target.height);
}, false);

/* 4. Load */
window.addEventListener("load", () => {
    console.log("Page successfully loaded");
}, false);

/* 5. Focus */
const navItem = document.querySelector(".nav");

navItem.addEventListener("focus", event => {
    event.target.style.borderBottom = "2px dashed #C0C0C0"
}, true);

/* 6. Resize */
function newDimensions() {
    console.log(`Window Width: ${window.innerWidth}`);
    console.log(`Window Height: ${window.innerHeight}`);
};

var timer;
window.addEventListener("resize", (function() {
    clearTimeout(timer);
    timer = setTimeout(newDimensions, 500);
}),false);

/* 7. Dblclick */
const changeSize = e => {
    const pTag = document.querySelector("p");
    e.target.style.fontSize = "2rem";
}
const revertSize = () => {
    const pTag = document.querySelector("p");
    e.target.style.fontSize = "1.6rem";
}
const pTags = document.querySelectorAll("p");
for (var i = 0; i < pTags.length; i++) {
    pTags[i].addEventListener("dblclick", changeSize);
}
for (var i = 0; i < pTags.length; i++) {
    pTags[i].addEventListener("dblclick", revertSize, true);
}

/* 8. Auxclick */
const footDivs = document.querySelectorAll(".btn");

footDivs.forEach(item => {
    item.addEventListener("auxclick", event => {   
        event.currentTarget.style.color = "purple";
    }, false)
});

/* 9. Context Menu */
document.querySelectorAll("section").forEach(item => {
    item.addEventListener('contextmenu', event => {
    event.preventDefault();
    })
});

/* 10. Key Up */
document.querySelectorAll("img").forEach(item => {
    item.addEventListener("keyup", event => {
        item.style.border = "1px solid blue";
    })
})