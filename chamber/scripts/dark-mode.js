document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("dark-mode-switch");
    const darkModeStylesheet = document.getElementById("dark-mode-stylesheet");

    darkModeSwitch.addEventListener("click", function () {
        if (darkModeSwitch.checked) {
            document.body.classList.add("dark-mode");
            darkModeStylesheet.href = "styles/dark-mode.css";
        } else {
            document.body.classList.remove("dark-mode");
            darkModeStylesheet.href = "";
        }
    });
});
