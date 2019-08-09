function makeLink(text, adr) {
    let br = document.createElement("br");
    let link = document.createElement("a");
    link.setAttribute("style", "color:black");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("href", adr);
    let node = document.createTextNode(text);
    link.appendChild(node);
    link.appendChild(br);
    let element = document.getElementById("div1");
    element.appendChild(link);
}

function regexInput(pattern, input) {
    return [...new Set(input.match(pattern))];
}

$(document).ready(function() {
    $("#logo_img").on({
        click: function() {
            window.location.href= "index.html";
        }
    });

    $("#submit").on({
        click: function() {
            $.get($("#url_input").val(), function(data) {
                document.getElementById("div1").innerHTML = "";
                try {
                    for(match of regexInput(/"display_url":(".*?")/g, data)) {
                        let link = match.substr('"display_url":"'.length, match.length).slice(0, -1);
                        console.log(link);

                        makeLink("Picture", link);
                    }
                } catch (error) {}
                
                try {
                    for(match of regexInput(/"video_url":(".*?")/g, data)) {
                        let link = match.substr('"video_url":"'.length, match.length).slice(0, -1);
                        console.log(link);

                        makeLink("Video", link);
                    }
                } catch(error) {}
            });
        }
    });
});