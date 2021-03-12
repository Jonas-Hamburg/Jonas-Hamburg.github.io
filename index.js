/* Navigationsleiste */
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 0) {
        document.getElementById("navigationsleiste").style = "background: var(--whiteOne); color: #333;";
    } else {
        document.getElementById("navigationsleiste").style = "animation: navigationsleisteTransparent 2s forwards;";
    }
});


window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navigationsleiste").style.top = "0";
    } else {
        document.getElementById("navigationsleiste").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

function menue() {
    var menue = document.getElementById("menue").getAttribute("value");
    switch (menue) {
        case "open":
            document.getElementById("menue").setAttribute("value", "close");
            document.getElementById("alternativeNav").style.left = "100%";
            document.body.style = "overflow: scroll;overflow-x: hidden";
            const scrolled = window.scrollY;
            if (scrolled > 0) {
                document.getElementById("navigationsleiste").style = "background: var(--whiteOne); color: #333;";
            } else {
                document.getElementById("navigationsleiste").style = "animation: navigationsleisteTransparent 2s forwards;";
            }
            document.getElementById("MenuBox1").setAttribute("class", "alternativeMenuBox");
            document.getElementById("MenuBox2").setAttribute("class", "alternativeMenuBox");
            document.getElementById("MenuBox3").setAttribute("class", "alternativeMenuBox");
            break;
        case "close":
            document.getElementById("menue").setAttribute("value", "open");
            document.getElementById("MenuBox1").setAttribute("class", "alternativeMenuBox MenuBox1");
            document.getElementById("MenuBox2").setAttribute("class", "alternativeMenuBox MenuBox2");
            document.getElementById("MenuBox3").setAttribute("class", "alternativeMenuBox MenuBox3");
            document.getElementById("alternativeNav").style.left = "0%";
            document.body.style.overflow = "hidden";
            document.getElementById("navigationsleiste").style.background = "var(--whiteOne)";
            break;
    }
}

function nav(name) {
    menue();
    window.scrollTo(0, 0);
    window.location = "#" + name;
}

function send() {
    document.getElementById("contactBox").style.display = "none";
    document.getElementById("answer").style.display = "block";
}
