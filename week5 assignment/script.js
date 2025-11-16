let isOpen = true;

document.getElementById("menu").addEventListener("click", hideBar);

function hideBar() {
    let sideBarHideShow = document.getElementsByClassName('navStyle')[0];

    if (isOpen) {
        sideBarHideShow.style.display = "none";
        isOpen = false;
    } else {
        sideBarHideShow.style.display = "block";
        isOpen = true;
    }
}

