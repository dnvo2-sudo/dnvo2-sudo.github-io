document.addEventListener("DOMContentLoaded", () => 
    {
    const now = new Date();
    const date = now.toLocaleString();
    document.getElementById("dateTime").innerHTML =
        `Today is: ${date}!`;
});
