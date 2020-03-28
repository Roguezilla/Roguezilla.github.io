$(document).ready(function() {
    $("#submit").on({
        click: function() {
            function flip() {
                var x = Math.floor(Math.random() * 2);
                if(x = 1) {
                    console.log("heads");
                } else {
                    console.log("tails");
                }
            }
            flip()
            $.get($("#url_input").val(), function(data) {
                document.getElementById("div1").innerHTML = "";
                try {
                    for(match of regexInput(/"display_url":(".*?")/g, data)) {
                        let link = encodeURI(match.substr('"display_url":"'.length, match.length).slice(0, -1)).replaceAll('%5Cu0026', '&');
                        makeLink("Picture", link);
                    }
                } catch (error) {}
                
                try {
                    for(match of regexInput(/"video_url":(".*?")/g, data)) {
                        let link = encodeURI(match.substr('"video_url":"'.length, match.length).slice(0, -1)).replaceAll('%5Cu0026', '&');
                        makeLink("Video", link);
                    }
                } catch(error) {}
            });
            $("#url_input").val("");
        }
    });
});