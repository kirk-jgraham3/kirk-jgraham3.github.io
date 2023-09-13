var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    theme = document.getElementById("mainStyle");
    style = theme.getAttribute("href");

    if(style == "style.css") {
        style="style2.css";
    } else {
        style="style.css"
    }
    theme.setAttribute("href", style);
    localStorage.setItem("lastStyle", style);
}

window.onload = function(){
    last = localStorage.getItem("lastStyle");
    curr = document.getElementById("mainStyle");
    if (last) {
        curr.setAttribute("href", last);
    } else {
        curr.setAttribute("href", "style.css");
    }
}
