let client_id = "9aB60VZycIERY07OUTVBL5GeErnTA0E4";

$(document).ready(function() {
    $("#submit").on({
        click: function() {
            document.getElementById("div1").innerHTML = "";
            $.get("https://cors-anywhere.herokuapp.com/" + "https://api-v2.soundcloud.com/resolve?url={0}&client_id={1}".format($("#url_input").val(), client_id), function(data) {
                //console.log("ID: " + data["id"]);
                $.get("https://cors-anywhere.herokuapp.com/" + "https://api.soundcloud.com/i1/tracks/{0}/streams?client_id={1}".format(data["id"], client_id), function(data) {
                    //console.log("Song url: " + data["http_mp3_128_url"]);
                    
                    makeLink("Song", data["http_mp3_128_url"]);         
                });             
            });
        }
    });
});