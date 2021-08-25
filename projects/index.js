function projects(link) {
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var obj = request.response;
        createCard(obj);
        startCarousel();
    };
}

function createCard(obj) {
    for (var i = 0; i < obj.project.length; i++) {

        var div = document.createElement("div");
        var image = document.createElement("div");
        var title = document.createElement("h2");
        var des = document.createElement("p");
        var link = document.createElement("a");
        var span = document.createElement("span");

        div.setAttribute("class", "card");
        image.setAttribute("class", "projectImage");
        title.setAttribute("class", "projectName");
        des.setAttribute("class", "projectDescription");
        link.setAttribute("target", "_blank");
        span.setAttribute("class", "arrow");

        image.setAttribute("style", "background: url('" + obj.project[i].image + "');background-size:cover;background-position:center;");
        var titleTxt = document.createTextNode(obj.project[i].name);
        var desTxt = document.createTextNode(obj.project[i].description);
        var linkTxt = document.createTextNode(" Projekt ansehen ");
        var arrow = document.createTextNode("➦");
        
        title.appendChild(titleTxt);
        des.appendChild(desTxt);
        link.appendChild(linkTxt);
        span.appendChild(arrow);
        link.appendChild(span);

        div.appendChild(image);
        div.appendChild(title);

        link.setAttribute("href", obj.project[i].link);
        des.appendChild(link);
        div.appendChild(des);

        document.getElementById("carousel").append(div);
    }
}

function startCarousel() {
    $(".carousel").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            700: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
}
