// used this: https://stackoverflow.com/questions/32540044/display-current-date-in-dd-mm-yyyy-format and https://stackoverflow.com/questions/30634949/how-to-display-date-using-javascript and https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event



document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const date = now.toLocaleString();
    document.getElementById("dateTime").innerHTML =
        `Today is: ${date}!`;
});


let isOpen = true;

document.getElementById("menu").addEventListener("click", hideBar);

function hideBar() {
    let navBar = document.getElementsByClassName('navStyle')[0];

    if (isOpen) {
        navBar.style.display = "none";
        isOpen = false;
    } else {
        navBar.style.display = "flex"; 
        isOpen = true;
    }
}

const menu = document.getElementById("menu");
const navBar = document.getElementsByClassName("navStyle")[0];

menu.addEventListener("click", () => {
    navBar.classList.toggle("hidden");
});
