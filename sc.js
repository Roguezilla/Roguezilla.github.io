let client_id = "9aB60VZycIERY07OUTVBL5GeErnTA0E4";

String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

$(document).ready(function() {
    $("#logo_img").on({
        click: function() {
            window.location.href= "index.html";
        }
    });

    $("#submit").on({
        click: function() {
            $.get("https://cors-anywhere.herokuapp.com/" + "https://api-v2.soundcloud.com/resolve?url={0}&client_id={1}".format($("#url_input").val(), client_id), function(data) {
                console.log(data["id"]);
                $.get("https://cors-anywhere.herokuapp.com/" + "https://api.soundcloud.com/i1/tracks/{0}/streams?client_id={1}".format(data["id"], client_id), function(data) {
                    console.log(data["http_mp3_128_url"]);
                    document.getElementById("div1").innerHTML = "";
                    let br = document.createElement("br");
                    let link = document.createElement("a");
                    link.setAttribute("style", "color:black");
                    link.setAttribute("target", "_blank");
                    link.setAttribute("rel", "noopener noreferrer");
                    link.setAttribute("href", data["http_mp3_128_url"]);
                    let node = document.createTextNode("Link");
                    link.appendChild(node);
                    link.appendChild(br);
                    let element = document.getElementById("div1");
                    element.appendChild(link);              
                });             
            });
        }
    });
});