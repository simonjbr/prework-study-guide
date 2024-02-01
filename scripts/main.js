/* const myImage = document.querySelector("img");

myImage.onClick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "./assets/bowtie-cat.png") {
        myImage.setAttribute("src", "./assets/310-box-model.png");
    } else {
        myImage.setAttribute("src", "./assets/bowtie-cat.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Chrome is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Chrome is cool, ${storedName}`;
}

myButton.onClick = () => {
    setUserName();
}; */