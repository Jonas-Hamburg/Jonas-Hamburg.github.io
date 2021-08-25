function about(link) {
    var request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        var obj = request.response;
        pinItems(obj);
    };
}

async function pinItems(obj) {
    var pinboard = document.getElementById("pinboard");
    for (var i = 0; i < obj.languages.length; i++) {
        var div = document.createElement("div");
        var span = document.createElement("span");
        var link = document.createElement("a");
        var wikiText = "";
        
        
        div.setAttribute("style", 
            "background: url('" + obj.languages[i].image + "');background-size:cover;background-position:center;cursor: pointer;"
        );
        
        var source = obj.languages[i].source;
        link.setAttribute("href", source);
        link.setAttribute("target", "_blank");
        link.innerHTML = source.replace("https://", "").substring(0, 40) + (source.length - 5 >= 40 ? "..." : "");
        
        const wiki = await fetch(obj.languages[i].wikipedia)
            .then((response) => response.json())
            .then(data => {return data;})
            .catch(error => {return error;});
        
        wikiText += wiki.extract_html.replaceAll("<span","");
        
        wikiText += " <a class='wikipediaLink' href='" + wiki.content_urls.desktop.page + "' target='_blank'>Wikipedia</a><br><br>";
        wikiText += "Original image source:<br>";        
        
        span.innerHTML = wikiText;
        span.appendChild(link);
        div.appendChild(span);
        pinboard.appendChild(div);
    }
}