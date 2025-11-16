let isOpen = true;

document.getElementById("menu").addEventListener("click", hideBar);

function hideBar() {
    let sideBarHideShow = document.getElementsByClassName('navStyle')[0];
    let content = document.getElementsByClassName('container-content')[0];

    if (isOpen) {
        sideBarHideShow.style.display = "none";

        content.style.left = "13vw";
        content.style.width = "80%";
        isOpen = false;
    } else {
        sideBarHideShow.style.display = "block";

        content.style.left = "25vw";
        content.style.width = "65%";
        isOpen = true;
    }
}

